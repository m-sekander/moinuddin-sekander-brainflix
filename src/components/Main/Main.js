import './Main.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoInfo from '../VideoInfo/VideoInfo';
import videoDetails from '../../data/video-details.json';
import CommentsSection from '../CommentsSection/CommentsSection';
import NextVideos from '../NextVideos/NextVideos';
import videos from '../../data/videos.json';

function Main() {
    function formatEpoch(timestamp) {
        const date = new Date(timestamp);

        // Adding a 0 to the 1 digit months and days if necessary and returning formatted date
        if (date.getDate() < 10) {
            if (date.getMonth() < 10) {
                return `0${date.getMonth()+1}/0${date.getDate()}/${date.getFullYear()}`;
            } else {
                return `${date.getMonth()+1}/0${date.getDate()}/${date.getFullYear()}`;
            }
        } else if (date.getMonth() < 10){
            return `0${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        } else {
            return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }

    return (
        <main className="main">
            <div className="main__active">
                <VideoPlayer image={videoDetails[0].image}></VideoPlayer>
                <VideoInfo formatEpoch={formatEpoch} title={videoDetails[0].title} channel={videoDetails[0].channel} description={videoDetails[0].description} views={videoDetails[0].views} likes={videoDetails[0].likes} timestamp={videoDetails[0].timestamp}></VideoInfo>
                <CommentsSection formatEpoch={formatEpoch} comments={videoDetails[0].comments}></CommentsSection>
                <NextVideos videos={videos}></NextVideos>
            </div>
        </main>
    )
}

export default Main