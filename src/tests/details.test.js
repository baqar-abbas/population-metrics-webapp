import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../mocks/Details';

describe('Companies', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Details />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
