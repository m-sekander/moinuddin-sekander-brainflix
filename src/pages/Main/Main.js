import './Main.scss'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import videoDetails from '../../data/video-details.json';
import CommentsSection from '../../components/CommentsSection/CommentsSection';
import NextVideos from '../../components/NextVideos/NextVideos';
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

    // Setup of the state on first video of the file
    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
    
    // Shows all videos but the one selected
    const nonSelectedVideos = videos.filter((video) => {
        return video.id !== selectedVideo.id
    })
    
    // Click event that changes the state and scrolls to the top of the page
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
            <VideoPlayer image={selectedVideo.image}></VideoPlayer>
            <div className="main__sundry">
                <div className="main__details">
                    <VideoInfo formatEpoch={formatEpoch} title={selectedVideo.title} channel={selectedVideo.channel} description={selectedVideo.description} views={selectedVideo.views} likes={selectedVideo.likes} timestamp={selectedVideo.timestamp}></VideoInfo>
                    <CommentsSection formatEpoch={formatEpoch} comments={selectedVideo.comments}></CommentsSection>
                </div>
                <NextVideos videos={nonSelectedVideos} handleClick={handleClick}></NextVideos>
            </div>
        </main>
    )
}

export default Main