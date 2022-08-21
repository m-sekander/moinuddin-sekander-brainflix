import './VideoInfo.scss'
import viewsIcon from '../../assets/images/views.svg'
import likesIcon from '../../assets/images/likes.svg'


function VideoInfo({formatEpoch, title, channel, description, views, likes, timestamp}) {
  return (
      <section className="video-info">
        <h1 className="video-info__title">{title}</h1>
        <div className="video-info__analytics">
            <div className="video-info__container-left">
                <h3 className="video-info__channel">By {channel}</h3>
                <span className="video-info__date">{formatEpoch(timestamp)}</span>
            </div>
            <div className="video-info__container-right">
                <div className="video-info__views">
                    <img className="video-info__views-icon" src={viewsIcon} alt="" />
                    <p className="video-info__views-count">{views}</p>
                </div>
                <div className="video-info__likes">
                    <img className="video-info__likes-icon" src={likesIcon} alt="" />
                    <p className="video-info__likes-count">{likes}</p>
                </div>
            </div>
        </div>
        <p className="video-info__description">{description}</p>
    </section>
  )
}

export default VideoInfo