import React from 'react';

const NotificationItem = ({ type, value, html }) => (
    <li data-notification-type={type}>
        {value}
        {html && <div dangerouslySetInnerHTML={html} />}
    </li>
);

export default NotificationItem;