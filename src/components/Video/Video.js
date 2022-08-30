import './Video.scss'
import {Link} from 'react-router-dom'

function Video({video, isMobile}) {
    // Function to add ellipsis as requested on the feedback
    function formatVideoTitle(title) {
        let formattedTitle = title;
        if (title.length > 40) {
            if (title[40] === " ") {
                formattedTitle = title.slice(0, 40) + '...';
            } else {
                const formattedTitleArr = formattedTitle.split(" ");
                formattedTitleArr.pop();
                formattedTitle = formattedTitleArr.join(" ") + "..."
            }
        }
        return formattedTitle;
    }

    return (
        // Each article hosts the click event that switches the state to the video clicked
        <Link to={`/videos/${video.id}`} className="video">
            <img className="video__image" src={video.image} alt={video.title} />
            <div className="video__details">
                <h3 className="video__title">{isMobile ? formatVideoTitle(video.title): video.title}</h3>
                <span>{video.channel}</span>
            </div>
        </Link>
    )
}

export default Video