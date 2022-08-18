import './Main.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoInfo from '../VideoInfo/VideoInfo';
import videoDetails from '../../data/video-details.json';
// import videos from '../../data/videos.json';

function Main() {
    function formatEpoch(timestamp) {
        const date = new Date(timestamp);
        return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    }

    return (
        <main className="main">
            <VideoPlayer image={videoDetails[0].image}></VideoPlayer>
            <VideoInfo formatEpoch={formatEpoch} title={videoDetails[0].title} channel={videoDetails[0].channel} description={videoDetails[0].description} views={videoDetails[0].views} likes={videoDetails[0].likes} timestamp={videoDetails[0].timestamp}></VideoInfo>
        </main>
    )
}

export default Main