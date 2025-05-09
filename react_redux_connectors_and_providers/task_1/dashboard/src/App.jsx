import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';
import { displayNotificationDrawer, hideNotificationDrawer } from './uiActions';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import Notifications from './components/Notifications/Notifications';
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';

function App({ isLoggedIn, displayNotificationDrawer, hideNotificationDrawer }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchCourses());
        }
    }, [dispatch, isLoggedIn]);

    return (
        <>
            <Notifications 
                displayDrawer={displayNotificationDrawer}
                hideDrawer={hideNotificationDrawer}
            />
            <Header />
            {!isLoggedIn ? (
                <BodySectionWithMarginBottom title="Log in to continue">
                    <Login />
                </BodySectionWithMarginBottom>
            ) : (
                <BodySectionWithMarginBottom title="Course list">
                    <CourseList />
                </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
                <p>Holberton School news goes here</p>
            </BodySection>
            <Footer />
        </>
    );
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func
};

App.defaultProps = {
    isLoggedIn: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {}
};

export const mapStateToProps = (state) => {
    if (state.get && typeof state.get === 'function') {
        return {
            isLoggedIn: state.get('isUserLoggedIn')
        };
    }
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

export const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
