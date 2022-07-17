import Image from 'next/image'
import { AboutStyled } from "./styled"

const About = () => {
  return (
    <AboutStyled id="about">
      <div className="container">
        <div className="title">
          <div className="vertical-line"></div>
          <span className="main-title">A 5Quattro Design</span>
        </div>
        <div className="content">
          <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac sodales sapien, vitae gravida risus. Duis porttitor tempus pellentesque. Nam pharetra augue sem, in convallis orci consequat et. Suspendisse potenti. Vivamus sed tortor eget lacus laoreet efficitur ac feugiat enim. In in feugiat arcu. Phasellus rhoncus vitae ipsum id lobortis.</span>
          <Image
            src="/about.jpg"
            width={700}
            height={600}
            alt=""
          />
        </div>
      </div>
    </AboutStyled>
  )
}

export default About