const PStyled = ({ name }) => (
    <>
        <p className="intro">{ name }</p>
        <style jsx>
            {
                `
                p {
                    color: #757575;
                    font-weight: 300;
                    margin: .5em 0 1.2em 0;
                }
                `
            }
        </style>
    </>
);

export default PStyled;