import './Upload.scss'
import uploadPreview from '../../assets/images/Upload-video-preview.jpg'
import Button from '../../components/Button/Button'
import publishIcon from '../../assets/images/publish.svg'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'


function Upload() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <main className="upload">
            <div className="upload__container">
                <h1 className="upload__header">Upload Video</h1>
                <form className="upload__form">
                    <div className="upload__engagement">
                        <label className="upload__label" htmlFor="">
                            Video Thumbnail
                            <img className="upload__preview" src={uploadPreview} alt="POV: riding on sky blue bike" />
                        </label>
                        <div className="upload__inputs">
                            <label className="upload__label" htmlFor="">
                                Title Your Video
                                <input className="upload__title" type="text" name="title" id="title" placeholder="Add a title to your video" />
                            </label>
                            <label className="upload__label" htmlFor="">
                                Add a Video Description
                                <textarea className="upload__description" name="description" id="description" placeholder="Add a description to your video"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="upload__cta">
                        <Button text="Publish" icon={publishIcon} isButton={true}></Button>
                        <Link to="/" className="upload__cancel">Cancel</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Upload