import Social from './Social';
import Navbar from './Navbar';
import NavbarOptions from './NavbarOptions';

const Header = ({ profile }) => {
    const { name, profession, short_bio, avatar, address, social } = profile;
    return (
        <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0">
                <a href="./">
                    {name}
                    <br />
                    <span>{profession}</span>
                </a>
            </h1>

            <Navbar>
                <div className="profile-section pt-3 pt-lg-0">
                    <img className="profile-image mb-2 rounded-circle mx-auto"
                        src={avatar} alt="image" width="100px" height="100px" />

                    <div className="bio mb-3">
                        {short_bio}
                        <br />
                        <p className="location">{address}</p>
                        <a href="./about">Descubre más sobre mí</a>
                    </div>

                    <Social social={social} />
                    <hr />
                </div>

                <NavbarOptions />

                <div className="my-2 my-md-3">
                    <a className="btn btn-primary" href="mailto:arbofercho@gmail.com" target="_blank" rel="noreferrer">Contactar</a>
                </div>
            </Navbar>
            <style jsx>
                {
                    `
                    p.location {
                        margin: 3px 0;
                        font-size: 1em;
                        font-weight: 400;
                    }

                    .profile-section .profile-image {
                        max-width: 130px;
                        margin-bottom: 0px !important;
                    }

                    .blog-name span {
                        font-size: .7em;
                        font-weight: 300;
                        margin: 0;
                        display: none;
                    }

                    @media (min-width: 992px) {
                        .blog-name span {
                            display: block;
                        }
                    }
                    `
                }
            </style>
        </header>
    )
};

export default Header;