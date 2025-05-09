import { fromJS } from 'immutable';
import { mapStateToProps } from '../App';

describe('mapStateToProps', () => {
  it('should return the right object when passing a specific state', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    
    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });
});