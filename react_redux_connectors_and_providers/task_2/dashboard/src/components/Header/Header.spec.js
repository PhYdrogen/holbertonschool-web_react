import { shallow } from 'enzyme';
import Header, { mapStateToProps, mapDispatchToProps } from './Header';
import { logout } from '../../uiActions';

describe('Header Component', () => {
    test('Renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    test('Displays logout section when user is logged in', () => {
        const user = { isLoggedIn: true, email: 'test@example.com' };
        const wrapper = shallow(<Header user={user} />);
        expect(wrapper.find('#logoutSection').exists()).toBe(true);
        expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
    });

    test('Does not display logout section when user is not logged in', () => {
        const user = { isLoggedIn: false };
        const wrapper = shallow(<Header user={user} />);
        expect(wrapper.find('#logoutSection').exists()).toBe(false);
    });

    test('Calls logout function when logout link is clicked', () => {
        const user = { isLoggedIn: true, email: 'test@example.com' };
        const logoutMock = jest.fn();
        const wrapper = shallow(<Header user={user} logout={logoutMock} />);
        wrapper.find('a').simulate('click');
        expect(logoutMock).toHaveBeenCalled();
    });
});

describe('mapStateToProps', () => {
    test('should return the right object when passing a specific state', () => {
        const state = {
            auth: { isLoggedIn: true, email: 'test@example.com' }
        };
        const result = mapStateToProps(state);
        expect(result).toEqual({ user: state.auth });
    });
});

describe('mapDispatchToProps', () => {
    test('should return the right object with the logout action creator', () => {
        expect(mapDispatchToProps.logout).toBe(logout);
    });
});
