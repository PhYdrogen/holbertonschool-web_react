import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection'; // Import BodySection to check rendering
import '@testing-library/jest-dom';

// Mock BodySection to isolate the test to BodySectionWithMarginBottom
jest.mock('./BodySection', () => {
    // Mock implementation that renders children and accepts title
    return jest.fn(({ title, children }) => (
        <div data-testid="mock-body-section">
            <h2>{title}</h2>
            {children}
        </div>
    ));
});

describe('BodySectionWithMarginBottom', () => {
    beforeEach(() => {
        // Clear mock calls before each test
        BodySection.mockClear();
    });

    it('should render a div with the class bodySectionWithMargin', () => {
        render(<BodySectionWithMarginBottom title="test title" />);
        // Find the mock component and check its parent.
        const mockBodySection = screen.getByTestId('mock-body-section');
        expect(mockBodySection.parentElement).toHaveClass('bodySectionWithMargin');
    });

    it('should render the BodySection component', () => {
        const titleText = 'test title margin';
        const childText = 'test child margin';
        render(
            <BodySectionWithMarginBottom title={titleText}>
                <p>{childText}</p>
            </BodySectionWithMarginBottom>
        );

        // Check if the mocked BodySection was called
        expect(BodySection).toHaveBeenCalledTimes(1);

        // Check if BodySection was called with the correct props
        expect(BodySection).toHaveBeenCalledWith(
            expect.objectContaining({
                title: titleText,
            }),
            {} // Second argument for context in class components, empty for functional
        );

        // Check if the children are passed down (rendered by the mock)
        expect(screen.getByText(childText)).toBeInTheDocument();
        // Check if the title is passed down (rendered by the mock)
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(titleText);
    });
});