import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';
import './Footer.css';

function Footer({ user }) {
    return (
        <div className="App-footer">
            <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
            {user && user.isLoggedIn && <a href="#">Contact us</a>}
        </div>
    );
}

Footer.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
        isLoggedIn: PropTypes.bool
    })
};

Footer.defaultProps = {
    user: null
};

export const mapStateToProps = (state) => {
    return {
        user: state.auth
    };
};

export default connect(mapStateToProps)(Footer);
