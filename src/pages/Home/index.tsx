import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../../components/header'
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
    </>
  )
}

export default Home
