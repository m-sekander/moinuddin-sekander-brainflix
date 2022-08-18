import './Main.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import videos from '../../data/videos.json';
// import videoDetails from '../../data/video-details.json';

function Main() {    
    return (
        <main className="main">
            <VideoPlayer video={videos[0]}></VideoPlayer>
        </main>
    )
}

export default Main