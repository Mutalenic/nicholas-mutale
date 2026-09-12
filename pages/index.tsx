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
        <title>Nicholas Mutale | Full-Stack Engineer · Ruby on Rails & React</title>
        <meta
          name="description"
          content="Full-Stack Engineer specializing in production Ruby on Rails and React — zero-downtime upgrades for government platforms, healthcare APIs serving real patients. Available for remote contract and full-time roles worldwide."
        />
        <meta
          name="keywords"
          content="full-stack engineer, ruby on rails, rails developer, react, next.js, PostgreSQL, Redis, Capistrano, RSpec"
        />
        <meta
          property="og:title"
          content="Nicholas Mutale | Full-Stack Engineer · Ruby on Rails & React"
        />
        <meta
          property="og:description"
          content="Full-Stack Engineer specializing in production Ruby on Rails and React — zero-downtime upgrades for government platforms, healthcare APIs serving real patients. Available for remote contract and full-time roles worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nicholasmutale.com" />
        <meta property="og:image" content="https://nicholasmutale.com/assets/Profile.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://nicholasmutale.com" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nicholas Mutale',
              jobTitle: 'Full-Stack Engineer',
              description:
                'Full-Stack Engineer specializing in production Ruby on Rails and React, with production systems across government, healthcare, and e-commerce.',
              url: 'https://nicholasmutale.com',
              email: 'mailto:nicomutale@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Livingstone',
                addressCountry: 'ZM',
              },
              sameAs: [
                'https://www.linkedin.com/in/nicholas-mutale-715714124/',
                'https://github.com/Mutalenic',
              ],
              knowsAbout: [
                'Ruby on Rails',
                'React',
                'Next.js',
                'PostgreSQL',
                'Redis',
                'Capistrano',
                'RSpec',
              ],
            }),
          }}
        />
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