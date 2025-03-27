import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // Import screen
import { beforeEach, afterEach, test, expect, jest, describe } from "@jest/globals"; // Import describe
import App from './App';

beforeEach(() => {
  jest.spyOn(document, 'addEventListener');
  jest.spyOn(document, 'removeEventListener');
});

afterEach(() => {
  // Ensure mocks are cleared after each test
  jest.restoreAllMocks();
});

test('Should return true if the App component is a class component', () => {
  const props = Object.getOwnPropertyNames(App.prototype);
  const isClassComponent = App.prototype.__proto__ === React.Component.prototype;
  const inheritsFromReactComponent = Object.getPrototypeOf(App.prototype) === React.Component.prototype;
  expect(props).toContain('constructor');
  expect(isClassComponent).toBe(true);
  expect(inheritsFromReactComponent).toBe(true);
});

test('Should call the logOut prop once whenever the user hits "Ctrl" + "h" keyboard keys', () => {
  const logOutMock = jest.fn();
  jest.spyOn(window, 'alert').mockImplementation(() => { });
  render(<App isLoggedIn={true} logOut={logOutMock} />);
  fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });
  expect(logOutMock).toHaveBeenCalledTimes(1);
});

test('Should display an alert window whenever the user hit "ctrl" + "h" keyboard keys', () => {
  const logoutSpy = jest.fn();
  // Mock window.alert before rendering
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
  render(<App logOut={logoutSpy} />);
  fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });
  expect(alertMock).toHaveBeenCalledWith('Logging you out');
});

test('Should remove event listener in componentWillUnmount', () => {
  const { unmount } = render(<App isLoggedIn={false} />);
  expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
  unmount();
  expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
});

test('should add event listener in componentDidMount', () => {
  render(<App isLoggedIn={false} />);
  expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
});

// New tests for BodySection integration
describe('BodySection Integration Tests', () => {
  test('should display "Course list" title when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    // Check for the h2 title within the BodySectionWithMarginBottom containing CourseList
    // Using regex for case-insensitivity
    expect(screen.getByText(/Course list/i)).toBeInTheDocument();
    // Optionally, verify CourseList is rendered
    expect(screen.getByText(/ES6/)).toBeInTheDocument(); // Assuming ES6 is a course name
  });

  test('should display "Log in to continue" title when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    // Check for the h2 title within the BodySectionWithMarginBottom containing Login
    // Using regex for case-insensitivity
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
    // Optionally, verify Login is rendered
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument(); // Assuming Login has an email input
  });

  test('should display "News from the School" section by default', () => {
    render(<App />); // Defaults to isLoggedIn={false}
    // Check for the h2 title within the BodySection
    // Using regex for case-insensitivity
    expect(screen.getByText(/News from the School/i)).toBeInTheDocument();
    // Check for the paragraph content
    expect(screen.getByText('Holberton School News goes here')).toBeInTheDocument();
  });
});
