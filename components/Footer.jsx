import Image from 'next/image';

const Footer = () => (
    <footer className="footer text-center py-2 theme-bg-dark">
        <small className="copyright">Copyright © 2020 Carlos Arboleda - Designed with <i className="fas fa-heart" /> by <a href="http://themes.3rdwavemedia.com" target="_blank" rel="noreferrer">Xiaoying Riley</a> for developers</small>
        <style jsx>
            {
                `
                i {
                    color: #fb866a;
                }
                `
            }
        </style>
    </footer>
);

export default Footer;