import './Video.scss'
import {Link} from 'react-router-dom'

function Video({video, handleClick}) {
    return (
        // Each article hosts the click event that switches the state to the video clicked
        <Link to={`/video/${video.id}`} className="video" onClick={()=>{handleClick(video.id)}}>
            <img className="video__image" src={video.image} alt={video.title} />
            <div className="video__details">
                <h3 className="video__title">{video.title}</h3>
                <span>{video.channel}</span>
            </div>
        </Link>
    )
}

export default Video