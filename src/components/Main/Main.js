import './Main.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoInfo from '../VideoInfo/VideoInfo';
import videoDetails from '../../data/video-details.json';
import CommentsSection from '../CommentsSection/CommentsSection';
import NextVideos from '../NextVideos/NextVideos';
import videos from '../../data/videos.json';
import {useState} from 'react';

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

    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
    
    const nonSelectedVideos = videos.filter((video) => {
        return video.id !== selectedVideo.id
    })

    const handleClick = (videoId) => {
        const newSelectedVideo = videoDetails.find((video) => {
            return videoId === video.id
        });
        setSelectedVideo(newSelectedVideo);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <main className="main">
            <div className="main__active">
                <VideoPlayer image={selectedVideo.image}></VideoPlayer>
                <VideoInfo formatEpoch={formatEpoch} title={selectedVideo.title} channel={selectedVideo.channel} description={selectedVideo.description} views={selectedVideo.views} likes={selectedVideo.likes} timestamp={selectedVideo.timestamp}></VideoInfo>
                <CommentsSection formatEpoch={formatEpoch} comments={selectedVideo.comments}></CommentsSection>
                <NextVideos videos={nonSelectedVideos} handleClick={handleClick}></NextVideos>
            </div>
        </main>
    )
}

export default Main