import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../../components/header'
import Informations from '../../components/informations'
import { HomeImageStyled } from './styled'

const Home: NextPage = () => {
  return (
    <>
      <HomeImageStyled>
        <Image
          src="/background.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt=""
        />
      </HomeImageStyled>
      <Header />
      <Informations />
    </>
  )
}

export default Home
