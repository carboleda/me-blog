import Image from 'next/image';
import Layout from '../components/Layout';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import PStyled from '../styled/PStyled';
import { getProfile } from '../data/profile';

const About = ({ profile }) => {
    return (
        <Layout profile={profile}>
            <article className="about-section py-5">
                <div className="container">
                    <h1 className="title mb-3">Sobre mí</h1>
                    <hr />

                    <PStyled name={profile.bio} />

                    <figure>
                        <Image className="img-fluid" src="/images/kotlin_everywhere_present.png" alt="image"/>
                    </figure>

                    <br />
                    <Education data={profile.education} />
                    <Experience data={profile.experience} />
                    <Certificates data={profile.certificate} />
                    <Skills data={profile.skills} />
                </div>
            </article>
        </Layout>
    );
};

export async function getStaticProps() {
    const profile = await getProfile();
    return { props: { profile } };
};

export default About;