import Layout from '../components/Layout';
import SlidePresentation from '../components/SlidePresentation';
import MediumPost from '../components/MediumPost';
import Welcome from '../components/Welcome';
import { getProfile } from '../data/profile';
import { getPosts } from '../data/blog';

const Blog = ({ profile, posts }) => {
    return (
        <Layout profile={profile}>
            <Welcome />
            {
                posts &&
                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container">
                        {
                            posts.map((post, index) => {
                                if (post.entryType == 'medium') {
                                    return <MediumPost data={post} key={`entry-${index}`} />
                                } else {
                                    return <SlidePresentation data={post} key={`entry-${index}`} />
                                }
                            })
                            /*
                            <nav className="blog-nav nav nav-justified my-5">
                                <a className="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                                <a className="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                            </nav>
                            */
                        }
                    </div>
                </section>
            }
        </Layout>
    );
};

export async function getServerSideProps() {
    const profile = await getProfile();
    const posts = await getPosts();

    return {
        props: {
            profile,
            posts
        }
    };
};

export default Blog;