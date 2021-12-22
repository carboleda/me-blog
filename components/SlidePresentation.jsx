const BlogPost = ({data}) => {
    const { title, image, link, createAt, description } = data;
    return (
        <div className="item mb-5">
            <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={image} alt="image" />
                <div className="media-body">
                    <h3 className="title mb-1">
                        <a href={link} target="_blank" rel="noreferrer">{title}</a>
                    </h3>
                    <div className="meta mb-1">
                        <span className="date">{createAt}</span>
                    </div>
                    <div className="intro">{description}</div>
                    <a className="more-link" href={link} target="_blank" rel="noreferrer">Ver en Slides.com &rarr;</a>
                </div>
            </div>
        </div>
    )
};

export default BlogPost;