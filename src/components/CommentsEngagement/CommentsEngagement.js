import './CommentsEngagement.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import Button from '../Button/Button'
import commentIcon from '../../assets/images/add_comment.svg'

function CommentsEngagement() {
    return (
        <div className="comments-engagement">
            <img className="comments-engagement__avatar" src={avatar} alt="serious man facing left" />
            <form className="comments-engagement__form">
                <label className="comments-engagement__label" htmlFor="comment">
                    Join the conversation
                    <textarea className="comments-engagement__comment" id="comment" name="comment" placeholder="Add a new comment"></textarea>
                </label>
                <Button text="Comment" icon={commentIcon} isButton={true}></Button>
            </form>
        </div>
    )
}

export default CommentsEngagement