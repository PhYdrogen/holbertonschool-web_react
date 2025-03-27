import { render, screen, within } from '@testing-library/react';
import { test, expect } from "@jest/globals";
import CourseListRow from './CourseListRow';

test('Should display 2 "th" element whenever the isHeader props set to true', () => {
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
                <CourseListRow isHeader={false} />
            </tbody>
        </table>
    )
    const trElement = screen.getAllByRole('cell');
    expect(trElement).toHaveLength(2);
});

test('Should display 1 "th" element whenever the "isHeader" props set to true, and "textSecondCell" set to null', () => {
    const props = {
        isHeader: true,
        textSecondCell: null
    }
    render(
        <table>
            <tbody>
                <CourseListRow {...props} />
            </tbody>
        </table>
    )
    const thElement = screen.getByRole('columnheader');
    expect(thElement).toHaveAttribute('colSpan', '2');
});

test('Should display 2 "th" elements whenever the "isHeader" props set to true, and "textSecondCell" is not null', () => {
    const props = {
        isHeader: true,
        textSecondCell: 'dummy title'
    }
    render(
        <table>
            <tbody>
                <CourseListRow {...props} />
            </tbody>
        </table>
    )
    const thElements = screen.getAllByRole('columnheader');
    expect(thElements).toHaveLength(2);
});

test('Should render 2 "td" elements inside a "tr" element whenever the "isHeader" prop is set to false', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={false} />
            </tbody>
        </table>
    )
    const trElement = screen.getByRole('row');
    const tdElement = within(trElement).getAllByRole('cell');
    expect(trElement).toBeInTheDocument()
    expect(tdElement).toHaveLength(2)
})

test('when isHeader is true, the component renders with the correct background color', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="Header" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle('background-color: rgb(222, 181, 181)'); // #deb5b545
});

test('when isHeader is true and textSecondCell is not null, renders with correct background color', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle('background-color: rgb(222, 181, 181)'); // #deb5b545
});

test('when isHeader is false, the component renders with the correct background color', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle('background-color: rgb(245, 245, 245)'); // #f5f5f5ab
});
