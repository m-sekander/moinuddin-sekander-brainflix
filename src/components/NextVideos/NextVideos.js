import Video from "../Video/Video"
import "./NextVideos.scss"

function NextVideos({videos, handleClick}) {
    const mappedVideos = videos.map((video) => {
        return (
            <Video video={video} key={video.id} handleClick={handleClick}></Video>
        )
    })

    return (
        <section className="next-videos">
            <h2 className="next-videos__title">NEXT VIDEOS</h2>
            <div className="next-videos__list">
                {mappedVideos}
            </div>
        </section>
    )
}

export default NextVideos