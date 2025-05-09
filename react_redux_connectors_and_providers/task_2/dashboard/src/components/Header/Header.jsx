import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../uiActions';
import './Header.css';
import logo from '../../assets/holberton-logo.jpg';

function Header({ user, logout }) {
    const handleLogout = () => {
        logout();
    };

    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="holberton logo" />
            <h1>School Dashboard</h1>
            {user && user.isLoggedIn ? (
                <div id="logoutSection">
                    Welcome <b>{user.email}</b> <a href="#" onClick={handleLogout}>(logout)</a>
                </div>
            ) : null}
        </div>
    );
}

Header.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
        isLoggedIn: PropTypes.bool
    }),
    logout: PropTypes.func
};

Header.defaultProps = {
    user: null,
    logout: () => {}
};

export const mapStateToProps = (state) => {
    return {
        user: state.auth
    };
};

export const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
