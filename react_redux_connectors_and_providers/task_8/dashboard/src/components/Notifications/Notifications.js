import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../../selectors/notificationSelector';
import { NotificationTypeFilters } from '../../actions/notificationActionTypes';
import './Notifications.css';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { displayDrawer, hideDrawer, listNotifications, loading, markNotificationAsRead, setNotificationFilter } = this.props;

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
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                      <button 
                        onClick={() => setNotificationFilter(NotificationTypeFilters.URGENT)}
                        style={{ marginRight: '5px' }}
                      >
                        ‼️
                      </button>
                      <button 
                        onClick={() => setNotificationFilter(NotificationTypeFilters.DEFAULT)}
                      >
                        ?
                      </button>
                    </div>
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
  setNotificationFilter: PropTypes.func,
  loading: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false,
  hideDrawer: () => {},
  listNotifications: null,
  fetchNotifications: () => {},
  markNotificationAsRead: () => {},
  setNotificationFilter: () => {},
  loading: false
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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
