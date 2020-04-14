const DivSubStyled = ({ children }) => (
    <>
        <div>
            {children}
        </div>
        <style jsx>
            {
                `
                div {
                    color: #000000;
                    font-weight: 300;
                }
                `
            }
        </style>
    </>
);

export default DivSubStyled;