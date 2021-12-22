import moment from 'moment';

const BlogPost = ({data}) => {
    const { title, thumbnail: image, link, pubDate: createAt, categories } = data;
    const createAtFormated = moment(createAt).format('MMM Do, YYYY');
    return (
        <div className="item mb-5">
            <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={image} alt="image" />
                <div className="media-body">
                    <h3 className="title mb-1">
                        <a href={link} target="_blank" rel="noreferrer">{title}</a>
                    </h3>
                    <div className="meta mb-1">
                        <span className="date">{`Created ${createAtFormated}`}</span>
                    </div>
                    <div className="meta mb-1">
                        {
                            categories && categories
                                .map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)
                        }
                    </div>
                    <a className="more-link" href={link} target="_blank" rel="noreferrer">Ver en Medium &rarr;</a>
                </div>
            </div>
        </div>
    )
};

export default BlogPost;