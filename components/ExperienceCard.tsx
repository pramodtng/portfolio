import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img
        initial={{
          y: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className='w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='/ProfileImage.gif'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Hi, There</h4>
        <p className='font-bold text-2xl mt-1'>Welcome Back</p>
        <div className='flex space-x-2 my-2'>
          <Image src={'/ReactJs.gif'} alt='react-js' width={50} height={50} className = 'rounded-full' />
          <Image src={'/NextJs.gif'} alt='react-js' width={50} height={50} className = 'rounded-full' />
          <Image src={'/ReactJs.gif'} alt='react-js' width={50} height={50} className = 'rounded-full' />
        </div>
        <p>Started with ......end</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Testing Purpose</li>
          <li>Testing Purpose</li>
          <li>Testing Purpose</li>
          <li>Testing Purpose</li>
          <li>Testing Purpose</li>
          <li>Testing Purpose</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard