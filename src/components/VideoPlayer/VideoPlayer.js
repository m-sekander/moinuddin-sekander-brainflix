import './VideoPlayer.scss'

function VideoPlayer({video}) {
    return (
        <video className="videoPlayer" poster={video.image} controls></video>
    )
}

export default VideoPlayer