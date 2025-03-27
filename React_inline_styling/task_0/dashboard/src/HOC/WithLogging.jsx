import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
    const getDisplayName = (WrappedComponent) => {
        return WrappedComponent.displayName || WrappedComponent.name ||
            "Component";
    };

    class HOC extends Component {
        componentDidMount() {
            console.log(
                `Component ${getDisplayName(WrappedComponent)} is mounted`,
            );
        }

        componentWillUnmount() {
            console.log(
                `Component ${
                    getDisplayName(WrappedComponent)
                } is going to unmount`,
            );
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    HOC.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;
    return HOC;
};

export default WithLogging;
