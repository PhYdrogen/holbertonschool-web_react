import uiReducer, { initialState } from './uiReducer';
import { APP_ACTIONS } from '../appReducer';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle LOGIN action correctly', () => {
    const user = { email: 'test@example.com', password: 'password123' };
    const action = { type: APP_ACTIONS.LOGIN, payload: user };
    const state = uiReducer(undefined, action);

    expect(state.get('isUserLoggedIn')).toBe(true);
    expect(state.get('user')).toEqual(user);
  });

  it('should handle LOGOUT action correctly', () => {
    // First set a logged in state
    const loggedInState = initialState
      .set('isUserLoggedIn', true)
      .set('user', { email: 'test@example.com', password: 'password123' });

    const action = { type: APP_ACTIONS.LOGOUT };
    const state = uiReducer(loggedInState, action);

    expect(state.get('isUserLoggedIn')).toBe(false);
    expect(state.get('user')).toBe(null);
  });

  it('should handle TOGGLE_DRAWER action correctly when display is true', () => {
    const action = { type: APP_ACTIONS.TOGGLE_DRAWER, payload: { display: true } };
    const state = uiReducer(undefined, action);

    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should handle TOGGLE_DRAWER action correctly when display is false', () => {
    // First set drawer to visible
    const drawerVisibleState = initialState.set('isNotificationDrawerVisible', true);

    const action = { type: APP_ACTIONS.TOGGLE_DRAWER, payload: { display: false } };
    const state = uiReducer(drawerVisibleState, action);

    expect(state.get('isNotificationDrawerVisible')).toBe(false);
  });

  it('should handle TOGGLE_DRAWER action correctly when no payload is provided', () => {
    const action = { type: APP_ACTIONS.TOGGLE_DRAWER };
    const state = uiReducer(undefined, action);

    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });
});
