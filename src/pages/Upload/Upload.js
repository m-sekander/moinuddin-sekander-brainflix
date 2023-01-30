import './Upload.scss'
import uploadPreview from '../../assets/images/Upload-video-preview.jpg'
import Button from '../../components/Button/Button'
import publishIcon from '../../assets/images/publish.svg'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import checkMark from '../../assets/images/check-mark-computcheck-mark-blue-clip-art-icon.png'
import Modal from '../../components/Modal/Modal'


// Sensitive info, please do not share to public
const API_URL = process.env.REACT_APP_SERVER;
const API_KEY = "?api_key=anything-but-nothing";


function Upload() {
    // Setting states to be used
    const [isPublished, setIsPublished] = useState(false);
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDescError, setIsDescError] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    // onSubmit function that calls axios post to backend server
    function handlePublish(event) {
        event.preventDefault();
        
        const videoToPost = {
            title: event.target.title.value,
            image: `${process.env.REACT_APP_SERVER}/images/Upload-video-preview.jpg`,
            description: event.target.description.value
        }
        
        axios.post(`${API_URL}/videos/${API_KEY}`, videoToPost)
        .then((result) => {
            console.log("For devs:", result);
            document.querySelector(".upload__form").reset()
            setIsErrorMessage(false);
            setIsPublished(true);
        })
        .catch((error) => {
            console.log("For devs:", error.response);
            
            if ((event.target.title.value === '') || (event.target.description.value === '')) {
                setIsErrorMessage(true);
            }
            if (event.target.title.value === '') {
                setIsTitleError(true);
            }
            if (event.target.description.value === '') {
                setIsDescError(true);
            }
        })
    }

    // Removing filled in error on input
    function handleTitleInput() {
        setIsTitleError(false);
    }
    function handleDescInput() {
        setIsDescError(false);
    }

    return (
        <main className="upload">
            <div className="upload__container">
                <h1 className="upload__header">Upload Video</h1>
                <form className="upload__form" onSubmit={handlePublish}>
                    <div className="upload__engagement">
                        <label className="upload__label" htmlFor="">
                            Video Thumbnail
                            <img className="upload__preview" src={uploadPreview} alt="POV: riding on sky blue bike" />
                        </label>
                        <div className="upload__inputs">
                            <label className="upload__label" htmlFor="title">
                                Title Your Video
                                <input className={`upload__title ${isTitleError ? 'upload__title--error' : ''}`} onInput={handleTitleInput} type="text" name="title" id="title" placeholder="Add a title to your video" />
                            </label>
                            <label className="upload__label" htmlFor="description">
                                Add a Video Description
                                <textarea className={`upload__description ${isDescError ? 'upload__description--error' : ''}`} onInput={handleDescInput} name="description" id="description" placeholder="Add a description to your video"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="upload__cta">
                        {isErrorMessage && <span className="upload__error">* Please complete required fields and try again *</span>}
                        <Button text="Publish" icon={publishIcon} isButton={true}></Button>
                        <Link to="/" className="upload__cancel">Cancel</Link>
                    </div>
                </form>
                {(isPublished) && <Modal message="Published Successfully!" image={checkMark}></Modal>}
            </div>
        </main>
    )
}

export default Upload