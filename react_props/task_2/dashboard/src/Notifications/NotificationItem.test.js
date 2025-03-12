import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('NotificationItem', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('renders type and value correctly', () => {
        const wrapper = shallow(
            <NotificationItem type="default" value="test" />
        );
        expect(wrapper.prop('data-notification-type')).toBe('default');
        expect(wrapper.text()).toEqual('test');
    });

    it('renders html prop correctly', () => {
        const html = { __html: '<u>test</u>' };
        const wrapper = shallow(
            <NotificationItem html={html} />
        );
        expect(wrapper.find('div').html()).toContain('<u>test</u>');
    });
});