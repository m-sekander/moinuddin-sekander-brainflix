import "./NextVideos.scss"

function NextVideos({videos}) {
    const mappedVideos = videos.map((video) => {
        return (
            <article className="video">
                <img className="video__image" src={video.image} alt={video.title} />
                <div className="video__details">
                    <h3>{video.title}</h3>
                    <span>{video.channel}</span>
                </div>
            </article>
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