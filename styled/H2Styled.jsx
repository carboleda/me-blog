const H2Styled = ({ name }) => (
    <>
        <h2>{ name }</h2>
        <style jsx>
            {
                `
                h2 {
                    font-weight: 500;
                    letter-spacing: .8px;
                    margin: 1em 0 0 0 0;
                    color: #007bff;
                }
                `
            }
        </style>
    </>
);

export default H2Styled;