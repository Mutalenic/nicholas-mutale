import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nicholas Mutale | Backend Engineer · Ruby on Rails</title>
        <meta
          name="description"
          content="Backend engineer with 4+ years of production Ruby on Rails experience. Available for remote contract and full-time roles worldwide."
        />
        <meta
          name="keywords"
          content="backend engineer, ruby on rails, rails developer, full-stack engineer, PostgreSQL, Redis, Capistrano, RSpec"
        />
        <meta
          property="og:title"
          content="Nicholas Mutale | Backend Engineer · Ruby on Rails"
        />
        <meta
          property="og:description"
          content="Backend engineer with 4+ years of production Ruby on Rails experience. Available for remote contract and full-time roles worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nicholasmutale.com" />
        <meta property="og:image" content="/assets/Profile.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Contact />   
    </div>
  )
}

export default Home