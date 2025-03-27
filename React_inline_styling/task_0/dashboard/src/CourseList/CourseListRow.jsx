import PropTypes from "prop-types";

// Define styles as constants
const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerStyle = { backgroundColor: "#deb5b545" };

CourseListRow.propTypes = {
    isHeader: PropTypes.bool, // isHeader is not required, it has a default value
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow number for textSecondCell
};

export default function CourseListRow({
    isHeader = false,
    textFirstCell = "",
    textSecondCell = null,
}) {
    // Determine the style based on isHeader
    const appliedStyle = isHeader ? headerStyle : rowStyle;

    return (
        // Apply the style to the tr element
        <tr style={appliedStyle}>
            {isHeader
                ? (
                    textSecondCell === null
                        ? <th colSpan={2}>{textFirstCell}</th>
                        : (
                            <>
                                <th>{textFirstCell}</th>
                                <th>{textSecondCell}</th>
                            </>
                        )
                )
                : (
                    <>
                        <td>{textFirstCell}</td>
                        <td>{textSecondCell}</td>
                    </>
                )}
        </tr>
    );
}
