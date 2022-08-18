import './VideoInfo.scss'
import viewsIcon from '../../assets/images/views.svg'
import likesIcon from '../../assets/images/likes.svg'


function VideoInfo({formatEpoch, title, channel, description, views, likes, timestamp}) {
  return (
      <div className="video-info">
        <h1 className="video-info__title">{title}</h1>
        <div className="video-info__analytics">
            <h3 className="video-info__channel">By {channel}</h3>
            <div className="video-info__views">
                <img className="video-info__views-icon" src={viewsIcon} alt="" />
                <p className="video-info__views-count">{views}</p>
            </div>
            <p className="video-info__date">{formatEpoch(timestamp)}</p>
            <div className="video-info__likes">
                <img className="video-info__likes-icon" src={likesIcon} alt="" />
                <p className="video-info__likes-count">{likes}</p>
            </div>
        </div>
        <p className="video-info__description">{description}</p>
    </div>
  )
}

export default VideoInfo