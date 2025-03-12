import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('contains 2 input and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).to.have.length(2);
        expect(wrapper.find('label')).to.have.length(2);
    });
});