import { fromJS } from 'immutable';
import { mapStateToProps, mapDispatchToProps } from '../App';
import { displayNotificationDrawer, hideNotificationDrawer } from '../uiActions';

describe('mapStateToProps', () => {
  it('should return the right object when passing a specific state', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });
});

describe('mapDispatchToProps', () => {
  it('should return an object with the right action creators', () => {
    expect(mapDispatchToProps.displayNotificationDrawer).toBe(displayNotificationDrawer);
    expect(mapDispatchToProps.hideNotificationDrawer).toBe(hideNotificationDrawer);
  });
});
