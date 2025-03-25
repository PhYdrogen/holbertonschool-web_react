import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('calls logOut prop when Control + H is pressed', () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);
    userEvent.keyboard('{Control>}h');
    expect(logOut).toHaveBeenCalledTimes(1);
});

test('displays "Logging you out" alert when Control + H is pressed', () => {
    const alertSpy = jest.spyOn(window, 'alert');
    render(<App />);
    userEvent.keyboard('{Control>}h');
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    alertSpy.mockRestore();
});