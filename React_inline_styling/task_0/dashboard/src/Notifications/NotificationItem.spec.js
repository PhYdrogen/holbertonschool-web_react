import { render, screen, fireEvent } from '../../$node_modules/@testing-library/react/types/index.js'; // Added fireEvent
import NotificationItem from './NotificationItem.jsx';
import { getLatestNotification } from '../utils/utils.js';
import { test, expect, jest } from '@jest/globals'; // Added jest

test('NotificationItem is rendered without crashing', () => {
    render(<NotificationItem />)
})

test('Should display the correct notification with a red color, and set the "data-notification-type" to urgent whenever it receives the type "urgent" props', () => {
    const props = {
        type: 'urgent',
        html: { __html: getLatestNotification() },
    }
    render(<NotificationItem {...props} />);
    const liElement = screen.getByRole('listitem');
    expect(liElement).toHaveStyle({ color: 'red' });
    expect(liElement).toHaveAttribute('data-notification-type', 'urgent');
});

test('Should display the correct notification with a blue color, and set the "data-notification-type" to default whenever it receives the type "default" props', () => {
    const props = {
        type: 'default',
        html: undefined,
    }
    render(<NotificationItem {...props} />);
    const liElement = screen.getByRole('listitem');
    expect(liElement).toHaveStyle({ color: 'blue' });
    expect(liElement).toHaveAttribute('data-notification-type', 'default');
});

test('Should call markAsRead prop with the correct id when clicked', () => {
    const mockMarkAsRead = jest.fn(); // Create a mock function
    const props = {
        id: 5, // Example ID
        type: 'default',
        value: 'Test notification',
        markAsRead: mockMarkAsRead, // Pass the mock function as prop
    };
    render(<NotificationItem {...props} />);
    const liElement = screen.getByRole('listitem');
    fireEvent.click(liElement); // Simulate click
    expect(mockMarkAsRead).toHaveBeenCalledTimes(1); // Check if the mock function was called once
    expect(mockMarkAsRead).toHaveBeenCalledWith(5); // Check if it was called with the correct ID
});
