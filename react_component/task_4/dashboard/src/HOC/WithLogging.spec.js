import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';

// Mock class component for testing
class MockApp extends React.Component {
    render() {
        return <h1>Hello from Mock App Component</h1>;
    }
}

describe('WithLogging HOC', () => {
    let consoleSpy;

    beforeEach(() => {
        // Spy on console.log before each test
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        // Restore console.log and cleanup after each test
        consoleSpy.mockRestore();
        cleanup();
    });

    it('should log mount and unmount messages for a pure HTML element', () => {
        const WrappedComponent = WithLogging(() => <p>Test</p>);
        const { unmount } = render(<WrappedComponent />);

        expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
        unmount();
        expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
    });

    it('should log mount and unmount messages with the component name for a class component', () => {
        const WrappedMockApp = WithLogging(MockApp);
        const { unmount } = render(<WrappedMockApp />);

        expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is mounted');
        unmount();
        expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is going to unmount');
    });

    it('should render the wrapped component correctly', () => {
        const WrappedMockApp = WithLogging(MockApp);
        const { getByText } = render(<WrappedMockApp />);

        expect(getByText('Hello from Mock App Component')).toBeInTheDocument();
    });
});