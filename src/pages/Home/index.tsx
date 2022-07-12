import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../../components/header'
import { HomeImageStyled, HomeTextStyled } from './styled'

const Home: NextPage = () => {
  return (
    <>
      <HomeImageStyled>
        <Image
          src="/background.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </HomeImageStyled>
      <Header />        
      <HomeTextStyled>
        <p>OIIIIIIIII</p>
      </HomeTextStyled>
    </>
  )
}

export default Home
