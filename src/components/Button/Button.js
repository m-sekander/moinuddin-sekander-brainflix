import './Button.scss'

function Button(prop) {
    return (
        <button className="button">
            <img className="button__icon" src={prop.icon} alt=""/>
            {prop.text}
            </button>
    );
}

export default Button;