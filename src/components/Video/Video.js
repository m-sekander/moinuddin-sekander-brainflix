import './Video.scss'

function Video({video}) {
    return (
        <article className="video">
            <img className="video__image" src={video.image} alt={video.title} />
            <div className="video__details">
                <h3>{video.title}</h3>
                <span>{video.channel}</span>
            </div>
        </article>
    )
}

export default Video