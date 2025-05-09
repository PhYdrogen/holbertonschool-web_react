import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchCourses } from './features/courses/coursesSlice';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActions';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import Notifications from './components/Notifications/Notifications';
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';

function App({ isLoggedIn, displayNotificationDrawer, hideNotificationDrawer, login }) {
    const dispatch = useDispatch();

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
                    <Login onLogin={login} />
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
    hideNotificationDrawer: PropTypes.func,
    login: PropTypes.func
};

App.defaultProps = {
    isLoggedIn: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
    login: () => {}
};

export const mapStateToProps = (state) => {
    if (state.ui && state.ui.get && typeof state.ui.get === 'function') {
        return {
            isLoggedIn: state.ui.get('isUserLoggedIn')
        };
    }
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

export const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer,
    login: loginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
