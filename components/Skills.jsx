import H2Styled from '../styled/H2Styled';

const Skills = props => (
    <>
        <div className="Skills">
            <H2Styled name="Habilidades" />
            <div className="container">
                {
                    props.data.map((skill, index) => (
                        <div className="Skills-item" key={`Skills-${index}`}>
                            <h5>{skill.name}</h5>
                            <div className="skillsLine">
                                <span style={{ width: skill.percentage }} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <style jsx>
            {
                `
                div.container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 2rem;
                    grid-row-gap: 0.5em;
                }

                h5 {
                    margin: .5em 0;
                }

                div.skillsLine {
                    height: 8px;
                    position: relative;
                    border-radius: 50px;
                    background: #c1d4f4;
                }

                @keyframes move {
                    0% { background-position: 0 0; }
                    100% { background-position: 50px 50px};
                }

                .skillsLine span {
                    display: block;
                    height: 100%;
                    border-radius: 8px;
                    background-color: #1b4e96;
                    overflow: hidden;
                    position: relative;
                    box-shadow: inset 0 2px 9px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4);
                }

                .skillsLine span::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background-image: linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);
                    z-index: 1;
                    background-size: 50px 50px;
                    animation: move 4s linear infinite;
                    overflow: hidden;
                }
                `
            }
        </style>
    </>
);

export default Skills;