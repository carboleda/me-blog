import H2Styled from '../styled/H2Styled';
import H5Styled from '../styled/H5Styled';
import PStyled from '../styled/PStyled';
import DivSubStyled from '../styled/DivSubStyled';

const Certificates = props => (
    <div>
        <H2Styled name="Certificados" />
        {
            props.data.map((cert, index) => (
                <div className="Certificates-item" key={`Cert-${index}`}>
                    <H5Styled>
                        {cert.name} @ {cert.institution}
                    </H5Styled>
                    <DivSubStyled>{cert.date}</DivSubStyled>
                    <PStyled name={cert.description}/>
                </div>
            ))
        }
    </div>
);

export default Certificates;