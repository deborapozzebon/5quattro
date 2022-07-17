import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Products from '../components/products'
import Home from './home'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>5Quattro</title>
      </Head>
      <main>
        <Home />
        <About />
        <Products />
      </main>
    </>
  )
}

export default HomePage
