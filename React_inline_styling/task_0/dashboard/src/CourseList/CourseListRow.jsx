import PropTypes from "prop-types";

CourseListRow.propTypes = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string.isRequired,
};

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerStyle = { backgroundColor: "#deb5b545" };

export default function CourseListRow({
    isHeader = false,
    textFirstCell = "",
    textSecondCell = null,
}) {
    const style = isHeader ? headerStyle : rowStyle;

    return (
        <tr style={style}>
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
