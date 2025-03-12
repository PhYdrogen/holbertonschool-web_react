import './Footer.css';
import { getFooterCopy } from '../utils/utils';

function Footer() {
    return (
        <div className="App-footer">
            <p>{getFooterCopy(true)}</p>
        </div>
    );
}

export default Footer;
