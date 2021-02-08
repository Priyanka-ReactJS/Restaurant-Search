import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';
describe("Home", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Home />);
  });
});