import './Button.scss'
import {Link} from 'react-router-dom'   ;

function Button({icon, text, isButton, link}) {
    if (isButton) {
        return (
            <button className="button">
                <img className="button__icon" src={icon} alt=""/>
                {text}
            </button>
        );
    } else {
        return (
            <Link to={link} className="button">
                <img className="button__icon" src={icon} alt=""/>
                {text}
            </Link>
        );
    }
}

export default Button;