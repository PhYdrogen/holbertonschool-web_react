import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySection.css"; // Import the CSS file

function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className="bodySectionWithMargin">
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    );
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
