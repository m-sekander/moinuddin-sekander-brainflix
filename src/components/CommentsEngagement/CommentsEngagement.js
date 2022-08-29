import './CommentsEngagement.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import Button from '../Button/Button'
import commentIcon from '../../assets/images/add_comment.svg'
import { useState } from 'react'

function CommentsEngagement() {
    // Setting error as a use state for the comment
    const [isError, setIsError] = useState(false);

    // Preventing refresh and allowing the basic validation check of filled in
    function handleSubmit(event) {
        event.preventDefault();
        
        if (event.target.comment.value === "") {
            setIsError(true);
        }
    }

    // Removing filled in error on input
    function handleInput() {
        setIsError(false);
    }

    return (
        <div className="comments-engagement">
            <img className="comments-engagement__avatar" src={avatar} alt="serious man facing left" />
            <form className="comments-engagement__form" onSubmit={handleSubmit}>
                <label className="comments-engagement__label" htmlFor="comment">
                    Join the conversation
                    <textarea className={`comments-engagement__comment ${isError ? "comments-engagement__comment--error" : ""}`} id="comment" name="comment" placeholder="Add a new comment" onInput={handleInput}></textarea>
                </label>
                <Button text="Comment" icon={commentIcon} isButton={true}></Button>
            </form>
        </div>
    )
}

export default CommentsEngagement