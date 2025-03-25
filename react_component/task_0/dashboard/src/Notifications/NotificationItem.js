import React from 'react'
import PropTypes from 'prop-types'

function NotificationItem({ type, value, html }) {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    )
  } else {
    return <li data-notification-type={type}>{value}</li>
  }
}

// Define prop types for NotificationItem
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

// Define default props for NotificationItem
NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
}

export default NotificationItem
