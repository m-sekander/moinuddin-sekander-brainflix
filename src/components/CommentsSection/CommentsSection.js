import './CommentsSection.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import Button from '../Button/Button'
import commentIcon from '../../assets/images/add_comment.svg'

function CommentsSection({formatEpoch, comments}) {
    const mappedComments = comments.map((comment, i) => {
        return (
            <div key={i} className="comment">
                <div className="comment__placeholder"></div>
                <div className="comment__info">
                    <div className="comment__top">
                        <h3 className="comment__name">{comment.name}</h3>
                        <span className="comment__date">{formatEpoch(comment.timestamp)}</span>
                    </div>
                    <p className="comment__para">{comment.comment}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="commentsSection">
            <h3 className="commentsSection__amount">{comments.length} Comments</h3>
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
            <div className="commentsList">
                {mappedComments}
            </div>
        </div>
    )
}

export default CommentsSection;