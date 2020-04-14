const H5Styled = ({ children }) => (
    <>
        <h5 className="title mb-1">{ children }</h5>
        <style jsx>
            {
                `
                h5 {
                    font-weight: 400;
                    margin: 0.5em 0;
                }
                `
            }
        </style>
    </>
);

export default H5Styled;