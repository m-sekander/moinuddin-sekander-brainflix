import './CommentsEngagement.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import Button from '../Button/Button'
import commentIcon from '../../assets/images/add_comment.svg'

function CommentsEngagement() {
    return (
        <div className="commentsEngagement">
            <img className="commentsEngagement__avatar" src={avatar} alt="serious man facing left" />
            <form className="commentsEngagement__form">
                <label className="commentsEngagement__label" htmlFor="comment">
                    Join the conversation
                    <textarea className="commentsEngagement__comment" id="comment" name="comment" placeholder="Add a new comment"></textarea>
                </label>
                <Button text="Comment" icon={commentIcon}></Button>
            </form>
        </div>
    )
}

export default CommentsEngagement