import "./Notifications.css";
import closeBtn from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import React from "react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    console.log(this.props);

    return (
      <>
        <div className="notification-title">Your notifications</div>
        {this.props.displayDrawer
          ? (
            <div className="Notifications">
              {this.props.notifications.length > 0
                ? (
                  <>
                    <p>Here is the list of notifications</p>
                    <button
                      onClick={() =>
                        console.log(
                          "Close button has been clicked",
                        )}
                      aria-label="Close"
                    >
                      <img
                        src={closeBtn}
                        width={30}
                        height={30}
                        alt="close button"
                      />
                    </button>
                    <ul>
                      {this.props.notifications.map((
                        notification,
                        index,
                      ) => (
                        <NotificationItem
                          key={index}
                          id={notification.id}
                          type={notification.type}
                          value={notification.value}
                          html={notification.html}
                          markAsRead={this.markAsRead}
                        />
                      ))}
                    </ul>
                  </>
                )
                : <p>No new notification for now</p>}
            </div>
          )
          : null}
      </>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.object,
    }),
  ),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: true,
};
