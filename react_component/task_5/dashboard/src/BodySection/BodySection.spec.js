import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';
import '@testing-library/jest-dom';

describe('BodySection', () => {
    it('should render an h2 element with the title prop value', () => {
        const titleText = 'test title';
        render(<BodySection title={titleText} />);
        const headingElement = screen.getByRole('heading', { level: 2 });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent(titleText);
    });

    it('should render its children correctly', () => {
        render(
            <BodySection title="test title">
                <p>test children node</p>
                <span>another child</span>
            </BodySection>
        );

        // Check if the children are rendered
        expect(screen.getByText('test children node')).toBeInTheDocument();
        expect(screen.getByText('another child')).toBeInTheDocument();

        // Check if the parent div contains the children
        const bodySectionDiv = screen.getByText('test children node').closest('div.bodySection');
        expect(bodySectionDiv).toContainElement(screen.getByText('test children node'));
        expect(bodySectionDiv).toContainElement(screen.getByText('another child'));
    });
});