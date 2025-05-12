import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../../selectors/notificationSelector';
import Notifications from './Notifications';

export class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <Notifications {...this.props} />;
  }
}

NotificationsContainer.propTypes = {
  fetchNotifications: PropTypes.func,
};

NotificationsContainer.defaultProps = {
  fetchNotifications: () => {},
};

export const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state),
    loading: state.notifications.get('loading')
  };
};

export const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsRead,
  setNotificationFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);