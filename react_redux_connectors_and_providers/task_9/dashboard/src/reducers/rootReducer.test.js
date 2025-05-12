import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = rootReducer(undefined, {});
    
    // Check that the initial state has the correct structure
    expect(initialState).toHaveProperty('courses');
    expect(initialState).toHaveProperty('notifications');
    expect(initialState).toHaveProperty('ui');
    
    // Check that each property is a Map
    expect(initialState.courses).toEqual(expect.any(Object));
    expect(initialState.notifications).toEqual(expect.any(Object));
    expect(initialState.ui).toEqual(expect.any(Map));
  });
});