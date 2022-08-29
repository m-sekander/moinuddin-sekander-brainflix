import './Button.scss'
import {Link} from 'react-router-dom'   ;

function Button({icon, text, isButton, link, handleClick}) {
    // Returns button if isButton prop is true else returns link
    if (isButton) {
        return (
            <button className="button" onClick={handleClick}>
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