import React from 'react';
import H2Styled from '../styled/H2Styled';
import H5Styled from '../styled/H5Styled';
import PStyled from '../styled/PStyled';
import DivSubStyled from '../styled/DivSubStyled';

const Experience = props => (
    <div>
        <H2Styled name="Experiencia" />
        {
            props.data.map((exp, index) => (
                <div className="Experience-item" key={`Exp-${index}`}>
                    <H5Styled>
                        {exp.jobTitle} @ {exp.company}
                    </H5Styled>
                    <DivSubStyled>{exp.startDate} - {exp.endDate}</DivSubStyled>
                    <PStyled name={exp.jobDescription} />
                </div>
            ))
        }
    </div>
);

export default Experience;