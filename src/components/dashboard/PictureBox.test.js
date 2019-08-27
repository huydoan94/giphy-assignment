import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {
  CardActionArea,
} from '@material-ui/core';

import { PictureBox } from './PictureBox';

describe('<PictureBox />', () => {
  let props;
  let component;

  const createComponent = () => {
    component = mount(<PictureBox {...props} />);
  };

  beforeEach(() => {
    props = {
      title: 'title',
      fixedHeightUrl: 'fixed_height_url',
      trendingDate: '2019-08-27T03:04:57+07:00',
      username: 'username',
      userAvatarUrl: 'avatar_url',
      handleOpen: jest.fn(),
      classes: {},
    };
    createComponent();
  });

  it('should match snapshot', () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('CardActionArea click should call handleOpen', () => {
    component.find(CardActionArea).simulate('click');
    expect(props.handleOpen).toHaveBeenCalledTimes(1);
  });
});
