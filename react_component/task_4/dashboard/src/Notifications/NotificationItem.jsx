import PropTypes from "prop-types";
import React from "react";

class NotificationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, html, value, markAsRead, id } = this.props;
        if (type === "default") {
            return (
                <li
                    style={{ color: "blue" }}
                    data-notification-type={type}
                    onClick={() => markAsRead(id)}
                >
                    {value}
                </li>
            );
        } else if (type === "urgent" && html !== undefined) {
            return (
                <li
                    style={{ color: "red" }}
                    data-notification-type={type}
                    dangerouslySetInnerHTML={html}
                    onClick={() => markAsRead(id)}
                >
                </li>
            );
        } else {
            return (
                <li
                    style={{ color: "red" }}
                    data-notification-type={type}
                    onClick={() => markAsRead(id)}
                >
                    {value}
                </li>
            );
        }
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    markAsRead: PropTypes.func.isRequired,
    html: PropTypes.object,
    value: PropTypes.string,
};

export default NotificationItem;
