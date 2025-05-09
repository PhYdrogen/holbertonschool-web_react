import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotifications, markAsRead } from '../../actions/notificationActionCreators';
import { getUnreadNotifications } from '../../selectors/notificationSelector';
import './Notifications.css';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { displayDrawer, hideDrawer, listNotifications, loading, markNotificationAsRead } = this.props;

    return (
      <div className="notifications-wrapper">
        <div 
          className="menuItem" 
          onClick={displayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button 
              aria-label="Close" 
              onClick={hideDrawer}
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                fontSize: '15px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              x
            </button>
            {loading ? (
              <p>Loading notifications...</p>
            ) : (
              <>
                {listNotifications && listNotifications.size > 0 ? (
                  <>
                    <p>Here is the list of notifications</p>
                    <ul>
                      {listNotifications.map(notification => (
                        <li 
                          key={notification.get('id')}
                          onClick={() => markNotificationAsRead(notification.get('id'))}
                        >
                          {notification.get('value')}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>No new notifications for now</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  hideDrawer: PropTypes.func,
  listNotifications: PropTypes.object,
  fetchNotifications: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  loading: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false,
  hideDrawer: () => {},
  listNotifications: null,
  fetchNotifications: () => {},
  markNotificationAsRead: () => {},
  loading: false
};

export const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotifications(state),
    loading: state.notifications.get('loading')
  };
};

export const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsRead
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
