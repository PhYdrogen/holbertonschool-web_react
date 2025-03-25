import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
  const handleClose = () => {
    console.log('Close button has been clicked')
  }
  return (
    <div className="menuItem">
      <p>Your notifications</p>
      {displayDrawer ? (
        <div className="Notifications">
          <button
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: 'transparent',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer'
            }}
            aria-label="Close"
            onClick={handleClose}
          >
            x
          </button>
          <p>Here is the list of notifications</p>
          {listNotifications.length === 0 ? (
            <NotificationItem
              type="default"
              value="No new notification for now"
            />
          ) : (
            <ul>
              {listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  )
}

Notifications.prototype = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications : [],
}

export default Notifications;
