import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Dashboard } from './Dashboard';

describe('<Dashboard />', () => {
  let props;
  let component;
  let componentInstance;

  const createComponent = () => {
    component = shallow(<Dashboard {...props} />);
    componentInstance = component.instance();
  };

  beforeEach(() => {
    props = {
      pictures: [],
      isFetching: false,
      fetchGiphy: jest.fn(),
      classes: {},
    };
    createComponent();
  });

  it('should match snapshot', () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('should match snapshot when loading', () => {
    component.setProps({ isFetching: true });
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('componentDidMount should call fetchGiphy', () => {
    componentInstance.fetchGiphy = jest.fn();
    const { currentOffset } = component.state();

    componentInstance.componentDidMount();
    expect(componentInstance.fetchGiphy).toHaveBeenCalledTimes(1);
    expect(componentInstance.fetchGiphy).toHaveBeenCalledWith(currentOffset, 20, false);
  });

  it('fetchGiphy should call prop fetchGiphy and set currentOffset', () => {
    props.fetchGiphy.mockReset();
    componentInstance.fetchGiphy(20, 20, true);

    expect(props.fetchGiphy).toHaveBeenCalledTimes(1);
    expect(props.fetchGiphy).toHaveBeenCalledWith(20, 20, true);
    expect(component.state().currentOffset).toBe(20 + 20);
  });

  it('handleScroll should not call fetchGiphy', () => {
    componentInstance.fetchGiphy = jest.fn();

    let eventTarget = {
      scrollTop: 0, clientHeight: 0, scrollHeight: 1000,
    };
    componentInstance.handleScroll({ target: eventTarget });
    expect(componentInstance.fetchGiphy).not.toHaveBeenCalled();

    eventTarget = {
      scrollTop: 500, clientHeight: 500, scrollHeight: 1000,
    };
    component.setProps({ isFetching: true });
    componentInstance.handleScroll({ target: eventTarget });
    expect(componentInstance.fetchGiphy).not.toHaveBeenCalled();
  });

  it('handleScroll should call fetchGiphy', () => {
    componentInstance.fetchGiphy = jest.fn();

    const { currentOffset } = component.state();
    const eventTarget = {
      scrollTop: 500, clientHeight: 500, scrollHeight: 1000,
    };
    componentInstance.handleScroll({ target: eventTarget });
    expect(componentInstance.fetchGiphy).toHaveBeenCalledTimes(1);
    expect(componentInstance.fetchGiphy).toHaveBeenCalledWith(currentOffset, 20, true);
  });

  it('makePictureProp should return correct props', () => {
    const data = {
      id: 'id',
      title: 'title',
      trending_datetime: 'trending_datetime',
      user: {
        username: 'username',
        avatar_url: 'avatar_url',
      },
      images: {
        original: {
          url: 'original_url',
        },
        fixed_height: {
          url: 'fixed_height_url',
        },
      },
    };
    const expected = {
      id: 'id',
      title: 'title',
      fixedHeightUrl: 'fixed_height_url',
      originUrl: 'original_url',
      trendingDate: 'trending_datetime',
      username: 'username',
      userAvatarUrl: 'avatar_url',
    };

    expect(componentInstance.makePictureProp(data)).toEqual(expected);
  });
});
