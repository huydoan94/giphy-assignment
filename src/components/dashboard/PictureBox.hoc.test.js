import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { withPictureFullscreenDialog } from './PictureBox.hoc';

describe('withPictureFullscreenDialog', () => {
  let props;
  let component;

  const createComponent = () => {
    const Wrapper = withPictureFullscreenDialog(() => <div />);
    component = mount(<Wrapper {...props} />);
  };

  beforeEach(() => {
    props = {
      id: 'id',
      title: 'title',
      originUrl: 'fixed_height_url',
    };
    createComponent();
  });

  it('should match snapshot', () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('should match snapshot when dialog open', () => {
    component.find('PictureFullscreenDialog').setState({ isOpen: true });
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('handleOpen should set isOpen to true', () => {
    component = component.find('PictureFullscreenDialog');
    const componentInstance = component.instance();

    component.setState({ isOpen: false });
    expect(component.state().isOpen).toBeFalsy();

    componentInstance.handleOpen();
    expect(component.state().isOpen).toBeTruthy();
  });

  it('handleClose should set isOpen to false', () => {
    component = component.find('PictureFullscreenDialog');
    const componentInstance = component.instance();

    component.setState({ isOpen: true });
    expect(component.state().isOpen).toBeTruthy();

    componentInstance.handleClose();
    expect(component.state().isOpen).toBeFalsy();
  });
});
