import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotifications } from '../../actions/notificationActionCreators';
import './Notifications.css';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { displayDrawer, hideDrawer, listNotifications, loading } = this.props;

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
                      {listNotifications.valueSeq().map(notification => (
                        <li key={notification.get('id')}>
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
  loading: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false,
  hideDrawer: () => {},
  listNotifications: null,
  fetchNotifications: () => {},
  loading: false
};

export const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get('notifications'),
    loading: state.notifications.get('loading')
  };
};

export const mapDispatchToProps = {
  fetchNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);