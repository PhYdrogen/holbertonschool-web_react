import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('Notifications', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders NotificationItem components', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('renders first NotificationItem correctly', () => {
        const wrapper = shallow(<Notifications />);
        const firstItem = wrapper.find(NotificationItem).first();
        expect(firstItem.prop('type')).toBe('default');
        expect(firstItem.prop('value')).toBe('New course available');
    });

    it('logs to console when simulating a click on a notification item', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const wrapper = shallow(<Notifications />);
        wrapper.find(NotificationItem).first().simulate('click');
        expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
        consoleSpy.mockRestore();
    });
});