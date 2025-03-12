import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

describe('App Component Tests', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').exists()).toBe(true);
    });

    it('renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').exists()).toBe(true);
    });

    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').exists()).toBe(true);
    });

    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).length).toBe(1);
    });

    it('should contain the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).length).toBe(1);
    });

    it('should contain the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).length).toBe(1);
    });

    it('should contain the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).length).toBe(1);
    });
});