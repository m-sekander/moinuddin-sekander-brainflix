import './Modal.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Modal({message, image, refresh}) {
    // These hover states are for extra flash on the modal
    const [isHover, setIsHover] = useState(false);

    // Changes box shadow on mouse enter and leave for the containers
    function handleMouseEnter() {
        setIsHover(true);
    }
    function handleMouseLeave() {
        setIsHover(false);
    }

    return (
        <div className={"modal"}>
            <div className={`modal__container ${isHover ? "modal__container--hover" : ""}`}>
                <img className="modal__image" src={image} alt="" />
                <div className="modal__text">
                    <h3 className={`modal__message ${isHover ? "modal__message--hover" : ""}`}>{message}</h3>
                    <Link className="modal__home" to="/" onClick={() => refresh && window.location.assign("/")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Go Home</Link>
                </div>
            </div>
        </div>
    )
}
export default Modal

