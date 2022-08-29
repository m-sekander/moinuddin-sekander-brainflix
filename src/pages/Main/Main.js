import './Main.scss'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import CommentsSection from '../../components/CommentsSection/CommentsSection';
import NextVideos from '../../components/NextVideos/NextVideos';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import sadFace from '../../assets/images/850656-200-sad-face.png';


const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "?api_key=23dd9335-4902-4efe-a62f-ee1827ad92dc";


function Main() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const [isError, setIsError] = useState(false);

    const {videoId} = useParams();

    useEffect(() => {
        window.scroll({
            top: 0,
            right: 0,
            behavior: 'smooth'
        });
        axios.get(`${API_URL}/videos/${API_KEY}`)
        .then((result) => {
            setVideos(result.data);
            const selectedVideoId = videoId || result.data[0].id;
            return axios.get(`${API_URL}/videos/${selectedVideoId}/${API_KEY}`);
        }).then((result) => {
            setSelectedVideo(result.data);
        }).catch((error) => {
            console.log("For devs:", error)
            setIsError(true);
        })
    }, [videoId])

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

    // Catch condition
    if(isError) {
        const idExists = videos.find((video) => videoId === video.id);
        if (!idExists) {
            return <Modal message="The video doesn't exist." image={sadFace} refresh={true}></Modal>;
        }
        return <h1>Request cannot be fullfilled at the moment. Please try again later.</h1>
    }
    
    // Don't render while the API is looking for the video
    if (!selectedVideo) {
        return <main></main>
    }
    
    
    // Shows all videos but the one selected
    const nonSelectedVideos = videos.filter((video) => {
        return video.id !== selectedVideo.id
    })
    

    return (
        <main className="main">
            <VideoPlayer image={selectedVideo.image}></VideoPlayer>
            <div className="main__sundry">
                <div className="main__details">
                    <VideoInfo formatEpoch={formatEpoch} title={selectedVideo.title} channel={selectedVideo.channel} description={selectedVideo.description} views={selectedVideo.views} likes={selectedVideo.likes} timestamp={selectedVideo.timestamp}></VideoInfo>
                    <CommentsSection formatEpoch={formatEpoch} comments={selectedVideo.comments}></CommentsSection>
                </div>
                <NextVideos nonSelectedVideos={nonSelectedVideos}></NextVideos>
            </div>
        </main>
    )
}

export default Main