import './Comment.scss'

function Comment({formatEpoch, comment, index}) {
    return (
        <div key={index} className="comment">
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
}

export default Comment