import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('contains img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).to.have.length(1);
        expect(wrapper.find('h1')).to.have.length(1);
    });
});