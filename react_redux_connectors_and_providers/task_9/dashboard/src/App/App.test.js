import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from '../App';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../uiActions';
import App from '../App';

describe('App Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('mapStateToProps', () => {
  it('should return the right object when passing a specific state', () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true
      })
    };

    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });
});

describe('mapDispatchToProps', () => {
  it('should return an object with the right action creators', () => {
    expect(mapDispatchToProps.displayNotificationDrawer).toBe(displayNotificationDrawer);
    expect(mapDispatchToProps.hideNotificationDrawer).toBe(hideNotificationDrawer);
    expect(mapDispatchToProps.login).toBe(loginRequest);
  });
});