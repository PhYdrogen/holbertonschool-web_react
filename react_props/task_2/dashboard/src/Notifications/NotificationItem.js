import React from 'react';

class NotificationItem extends React.Component {
    render() {
        const { type, value, html, markAsRead, id } = this.props;
        return (
            <li data-notification-type={type} onClick={() => markAsRead(id)}>
                {value}
                {html && <div dangerouslySetInnerHTML={html} />}
            </li>
        );
    }
}

export default NotificationItem;