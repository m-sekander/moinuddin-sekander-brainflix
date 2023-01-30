import './CommentsSection.scss'
import CommentsEngagement from '../CommentsEngagement/CommentsEngagement'
import Comment from '../Comment/Comment'

function CommentsSection({formatEpoch, comments}) {
    // Sorts the comments newest first
    function sortComments(a, b) {
        if (a.timestamp > b.timestamp) {
            return -1;
        } else if (a.timestamp < b.timestamp) {
            return 1;
        } else return 0;
    }
    const sortedComments = comments.sort(sortComments);

    // Maps through each comment in the array and outputs a comment component for each
    const mappedComments = sortedComments.map((comment, i) => {
        return (
            <Comment formatEpoch={formatEpoch} comment={comment} key={i}></Comment>
        )
    })

    return (
        <section className="comments-section">
            <h3 className="comments-section__amount">{comments.length} Comments</h3>
            {/* <CommentsEngagement></CommentsEngagement> */}
            <div className="comments-section__list">
                {mappedComments}
            </div>
        </section>
    )
}

export default CommentsSection;