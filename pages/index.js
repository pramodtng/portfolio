import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Hey There!</title>
      </Head>
      <Header />
      // <section id="hero" className='snap center'>
      //   <Hero />
      // </section>
      // <About />
      // <WorkExperience />
    </div>
  )
}
