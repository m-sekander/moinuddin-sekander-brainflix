import './VideoPlayer.scss'

function VideoPlayer({image}) {
    return (
        <div className="video-player">
            <video className="video-player__content" poster={image} controls></video>
        </div>
    )
}

export default VideoPlayer