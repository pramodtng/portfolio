import { motion } from 'framer-motion'
import React from 'react'
// import ProfileImage from '../public/ProfileImage.gif'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-center'>About</h3>
       <motion.img 
        initial = {{
          x: -200,
          opacity: 0
        }}
        transition = {{
          duration:  1.2
        }}
        whileInView = {{
          x: 0,
          opacity: 1
        }}
        viewport = {{
          once: true,
        }}
        src = {'/ProfileImage.gif'}
        className = '-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-64 md:h-95 xl:w-[600px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0'>
        <h4 className='text-4xl font-semibold'>
          Here is a {" "} <span className='underline decoration-[#F7AB0A]/50'>Little</span> Background
        </h4>
        <p className='text-sm'>
            Hi, My name is Promod Tamang. I am currently working as a Software Engineer in TashiCell
        </p>
      </div>
    </div>
  )
}

export default About