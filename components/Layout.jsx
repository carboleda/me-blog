import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default ({ children, profile }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Blog - Carlos Fernando Arboleda Garcés</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="./styles/theme.css" rel="stylesheet" />
                {
                    /*<script defer src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
                        integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7"
                        crossOrigin="anonymous" />*/
                }
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"></link>

                <link rel="canonical" href="" />
                <link rel="shortcut icon" href="./images/icon.png" />
                <meta name="author" content="Carlos Fernando Arboleda Garcés" />
                <link rel="manifest" href="https://carlosarboleda.co/assets/manifest.json" />
                <meta name="description" content="Desarrollador Full Stack con más de 9 años de experiencia participando activamente en todo el ciclo de de vida de proyectos de software, desde el análisis hasta la puesta en marcha en producción. Me apasiona el emprendimiento y la construcción de productos de software de alto rendimiento y consumo masivo. Durante los últimos 7 años me he especializado en el desarrollo de aplicaciones móviles Android y Backend." />
                <meta name="keywords" content="Carlos, Fernando, Arboleda, Garces, Java, Android, Kotlin, Javasript, Reactjs" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@cfarboleda" />
                <meta name="twitter:creater" content="@cfarboleda" />
                <meta name="twitter:title" content="Carlos Fernando Arboleda Garcés" />
                <meta name="twitter:descripction" content="Desarrollador Full Stack con más de 9 años de experiencia participando activamente en todo el ciclo de de vida de proyectos de software, desde el análisis hasta la puesta en marcha en producción. Me apasiona el emprendimiento y la construcción de productos de software de alto rendimiento y consumo masivo. Durante los últimos 7 años me he especializado en el desarrollo de aplicaciones móviles Android y Backend." />
                <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/test-1-600e1.appspot.com/o/me-cv%2Fcfag_kotlin_everywhere2019_crop.png?alt=media" />

                <meta name="og:locale" content="es_CO" />
                <meta name="og:type" content="website" />
                <meta name="og:title" content="Carlos Fernando Arboleda Garcés" />
                <meta name="og:descripction" content="Desarrollador Full Stack con más de 9 años de experiencia participando activamente en todo el ciclo de de vida de proyectos de software, desde el análisis hasta la puesta en marcha en producción. Me apasiona el emprendimiento y la construcción de productos de software de alto rendimiento y consumo masivo. Durante los últimos 7 años me he especializado en el desarrollo de aplicaciones móviles Android y Backend." />
                <meta name="og:url" content="" />
                <meta name="og:site_name" content="" />
                <meta name="og:image" content="https://firebasestorage.googleapis.com/v0/b/test-1-600e1.appspot.com/o/me-cv%2Fcfag_kotlin_everywhere2019_crop.png?alt=media" />
            </Head>
            <Header profile={profile} />
            <div className="main-wrapper">
                {children}
                <Footer />
            </div>
        </>
    )
};