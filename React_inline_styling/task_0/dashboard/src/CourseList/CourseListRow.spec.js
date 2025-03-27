import { render, screen, within } from '@testing-library/react';
import { test, expect } from "@jest/globals";
import CourseListRow from './CourseListRow';
import '@testing-library/jest-dom'; // Import jest-dom for toHaveStyle

// Existing tests (should still pass)
test('Should display 2 "th" element whenever the isHeader props set to true and textSecondCell is provided', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
            </tbody>
        </table>
    )
    const trElement = screen.getAllByRole('columnheader');
    expect(trElement).toHaveLength(2);
});

test('Should display 2 "td" element whenever the "isHeader" props set to false', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />
            </tbody>
        </table>
    )
    const trElement = screen.getAllByRole('cell');
    expect(trElement).toHaveLength(2);
});

test('Should display 1 "th" element with colspan=2 whenever the "isHeader" props set to true, and "textSecondCell" set to null', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell={null} />
            </tbody>
        </table>
    )
    const thElement = screen.getByRole('columnheader');
    expect(thElement).toHaveAttribute('colSpan', '2');
});

// New tests for inline styles
test('when isHeader is true, the cell background color is #deb5b545', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="Test Header" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    // Using rgba equivalent for #deb5b545
    expect(trElement).toHaveStyle('background-color: rgba(222, 181, 181, 0.271)');
});

test('when isHeader is true and secondTextCell is not null, the cell background color is #deb5b545', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="Test Header" textSecondCell="Sub Header" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    // Using rgba equivalent for #deb5b545
    expect(trElement).toHaveStyle('background-color: rgba(222, 181, 181, 0.271)');
});

test('when isHeader is false, the cell background color is #f5f5f5ab', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="Test Data" textSecondCell="More Data" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    // Using rgba equivalent for #f5f5f5ab
    expect(trElement).toHaveStyle('background-color: rgba(245, 245, 245, 0.671)');
});

// Adjusted existing test for clarity
test('Should render 2 "td" elements inside a "tr" element whenever the "isHeader" prop is set to false', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />
            </tbody>
        </table>
    )
    const trElement = screen.getByRole('row');
    const tdElements = within(trElement).getAllByRole('cell'); // Use getAllByRole for multiple elements
    expect(trElement).toBeInTheDocument();
    expect(tdElements).toHaveLength(2);
});