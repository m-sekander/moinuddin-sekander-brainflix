import './Button.scss'

function Button({icon, text, isButton}) {
    if (isButton) {
        return (
            <button className="button">
                <img className="button__icon" src={icon} alt=""/>
                {text}
            </button>
        );
    } else {
        return (
            <a className="button">
                <img className="button__icon" src={icon} alt=""/>
                {text}
            </a>
        );
    }
}

export default Button;