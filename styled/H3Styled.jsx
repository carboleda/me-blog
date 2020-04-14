const H3Styled = ({ children }) => (
    <>
        <h3 className="title mb-1">{ children }</h3>
        <style jsx>
            {
                `
                h3 {
                    font-weight: 400;
                    margin: 0.5em 0;
                }
                `
            }
        </style>
    </>
);

export default H3Styled;