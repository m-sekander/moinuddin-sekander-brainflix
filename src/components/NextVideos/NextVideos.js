import Video from "../Video/Video"
import "./NextVideos.scss"

function NextVideos({nonSelectedVideos}) {
    // Maps through each video in the array and outputs a video component for each
    const mappedVideos = nonSelectedVideos.map((video) => {
        return (
            <Video video={video} key={video.id}></Video>
        )
    })

    return (
        <section className="next-videos">
            <h2 className="next-videos__title">Next Videos</h2>
            <div className="next-videos__list">
                {mappedVideos}
            </div>
        </section>
    )
}

export default NextVideos