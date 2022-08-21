import './CommentsSection.scss'
import CommentsEngagement from '../CommentsEngagement/CommentsEngagement'
import Comment from '../Comment/Comment'

function CommentsSection({formatEpoch, comments}) {
    const mappedComments = comments.map((comment, i) => {
        return (
            <Comment formatEpoch={formatEpoch} comment={comment} key={i}></Comment>
        )
    })

    return (
        <section className="commentsSection">
            <h3 className="commentsSection__amount">{comments.length} Comments</h3>
            <CommentsEngagement></CommentsEngagement>
            <div className="commentsSection__list">
                {mappedComments}
            </div>
        </section>
    )
}

export default CommentsSection;