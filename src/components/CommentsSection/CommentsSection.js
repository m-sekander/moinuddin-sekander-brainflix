import './CommentsSection.scss'
import CommentsEngagement from '../CommentsEngagement/CommentsEngagement'

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
            <CommentsEngagement></CommentsEngagement>
            <div className="commentsList">
                {mappedComments}
            </div>
        </div>
    )
}

export default CommentsSection;