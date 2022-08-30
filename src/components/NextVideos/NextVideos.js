import Video from "../Video/Video"
import "./NextVideos.scss"
import {useEffect, useState} from 'react'

function NextVideos({nonSelectedVideos}) {
    // This useState used for letting video cards know when it is mobile for ellipsis
    const [scrnSize, setScrnSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setScrnSize(window.innerWidth));

        return () => {
            window.removeEventListener('resize', () => setScrnSize(window.innerWidth));
        }}
    , [scrnSize])

    // Maps through each video in the array and outputs a video component for each
    const mappedVideos = nonSelectedVideos.map((video) => {
        return (
            <Video video={video} key={video.id} isMobile={scrnSize<768}></Video>
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