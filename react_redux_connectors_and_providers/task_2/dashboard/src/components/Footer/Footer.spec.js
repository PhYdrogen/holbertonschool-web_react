import { shallow } from 'enzyme';
import Footer, { mapStateToProps } from './Footer';

describe('Footer Component', () => {
    test('Renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    test('Displays "Contact us" link when user is logged in', () => {
        const user = { isLoggedIn: true, email: 'test@example.com' };
        const wrapper = shallow(<Footer user={user} />);
        expect(wrapper.find('a').text()).toEqual('Contact us');
    });

    test('Does not display "Contact us" link when user is not logged in', () => {
        const user = { isLoggedIn: false };
        const wrapper = shallow(<Footer user={user} />);
        expect(wrapper.find('a').exists()).toBe(false);
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
