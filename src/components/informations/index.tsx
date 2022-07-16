import { InformationStyled } from "./styled";
import Image from 'next/image'

const Informations = () => {

  return (
    <InformationStyled>
      <div className="container">
        <div className="main-information">
          <div className="left">
            <div className="vertical-line"></div>
          </div>
          <div className="right">
            <div className="top-right">
              <span className="top-right-text">mobiliário </span>
              <div className="horizontal-line"></div>
            </div>
            <div className="bottom-right">
              <span className="bottom-right-text-principal">INDUSTRIAL PREMIUM</span>
              <span className="bottom-right-text">localizada em um dos maiores polos moveleiros do país!</span>
            </div>
          </div>
        </div>
      </div>
    </InformationStyled>
  )
}

export default Informations;