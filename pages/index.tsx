import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nicholas Mutale | Full Stack Web Developer</title>
        <meta name="description" content="Nicholas Mutale is a professional full stack web developer specializing in modern JavaScript frameworks like React, Next.js, and Ruby on Rails." />
        <meta name="keywords" content="web developer, full stack developer, JavaScript, React, Next.js, Ruby on Rails, portfolio" />
        <meta property="og:title" content="Nicholas Mutale | Full Stack Web Developer" />
        <meta property="og:description" content="Professional portfolio showcasing full stack web development projects and skills" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nicholasmutale.com" />
        <meta property="og:image" content="/assets/Profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />   
    </div>
  )
}

export default Home