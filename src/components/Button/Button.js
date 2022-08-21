import './Button.scss'

function Button({icon, text}) {
    return (
        <button className="button">
            <img className="button__icon" src={icon} alt=""/>
            {text}
        </button>
    );
}

export default Button;