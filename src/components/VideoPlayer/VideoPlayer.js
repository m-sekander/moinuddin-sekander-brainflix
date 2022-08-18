import './VideoPlayer.scss'

function VideoPlayer({image}) {
    return (
        <video className="video-player" poster={image} controls></video>
    )
}

export default VideoPlayer