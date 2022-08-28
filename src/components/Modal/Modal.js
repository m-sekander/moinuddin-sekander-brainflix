import './Modal.scss'
import {Link} from 'react-router-dom'

function Modal({message, image}) {
    return (
        <div className="modal">
            <div className="modal__container">
                <img className="modal__image" src={image} alt="" />
                <div className="modal__text">
                    <h3 className="modal__message">{message}</h3>
                    <Link className="modal__home" to="/">Go Home</Link>
                </div>
            </div>
        </div>
    )
}
export default Modal

