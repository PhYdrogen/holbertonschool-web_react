import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'black',
  },
  urgent: {
    color: 'red',
  },
});

class NotificationItem extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number,
  };

  static defaultProps = {
    type: 'default',
    value: '',
    html: null,
    markAsRead: () => { },
    id: null,
  };

  handleClick = () => {
    const { markAsRead, id } = this.props;
    if (markAsRead && id !== null) {
      markAsRead(id);
    }
  };

  render() {
    const { type, value, html } = this.props;
    let itemStyle = styles.default;

    if (type === 'urgent') {
      itemStyle = styles.urgent;
    }

    if (html) {
      return (
        <li
          data-notification-type={type}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={html}
          className={css(itemStyle)}
        ></li>
      );
    } else {
      return (
        <li
          data-notification-type={type}
          onClick={this.handleClick}
          className={css(itemStyle)}
        >
          {value}
        </li>
      );
    }
  }
}

export default NotificationItem;
