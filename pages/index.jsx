import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import { getProfile } from '../data/profile';

const Index = ({ profile }) => (
    <div>
        <Layout profile={profile}>
            <Welcome />

            <div className="container text-center">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/keKEvCzp7MA?start=12127&end=15942"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <br />
                <br />
                <div className="intro">Mi última charla titulada From STUPID to SOLID code, en la que estuve hablando sobre reconocer el código STUPID, mejorarlo usando los principios SOLID y así comenzar a reducir la deuda técnica en nuestros proyectos</div>
                <br />
            </div>
        </Layout>
        <style jsx>
            {
                `
                iframe {
                    width: 450px;
                    height: 250px;
                }

                @media (min-width: 992px) {
                    iframe {
                        width: 560px;
                        height: 315px;
                    }
                }
                `
            }
        </style>
    </div>
);

export async function getStaticProps() {
    const profile = await getProfile();
    return { props: { profile } };
};

export default Index;