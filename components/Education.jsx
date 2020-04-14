import React from 'react';
import H2Styled from '../styled/H2Styled';
import H5Styled from '../styled/H5Styled';
import PStyled from '../styled/PStyled';
import DivSubStyled from '../styled/DivSubStyled';

const Education = props => (
    <div className="Education">
        <div className="Education-container">
            <H2Styled name="Educación" />
            {
                props.data.map((edu, index) => (
                    <div className="Education-item" key={`Edu-${index}`}>
                        <H5Styled>
                            {edu.degree} @ {edu.institution}
                        </H5Styled>
                        <DivSubStyled>{edu.startDate} - {edu.endDate}</DivSubStyled>
                        <PStyled name={edu.description} />
                    </div>
                ))
            }
        </div>
    </div>
);

export default Education;