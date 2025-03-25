import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <div className='Notifications'>
                <button
                    style={{ position: 'absolute', right: '10px' }}
                    aria-label='Close'
                    onClick={() => console.log('Close button has been clicked')}
                >
                    x
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="New course available" markAsRead={this.markAsRead} id={1} />
                    <NotificationItem type="urgent" value="New resume available" markAsRead={this.markAsRead} id={2} />
                    <NotificationItem type="urgent" value={getLatestNotification()} markAsRead={this.markAsRead} id={3} />
                </ul>
            </div>
        );
    }
}

export default Notifications;
