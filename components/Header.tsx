import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"


type Props = {}

export default function Header({ }: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <div className='flex flex-row items-center'>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
        >
          <SocialIcon bgColor='transparent' fgColor='gray' url='https://www.youtube.com/watch?v=urgi2iz9P6U&t=304s' target= '_blank' />
          <SocialIcon bgColor='transparent' fgColor='gray' url='https://www.linkedin.com/in/promod-tamang-5ab15720a/' target='_blank' />
          <SocialIcon bgColor='transparent' fgColor='gray' url='https://github.com/pramodtng' target= '_blank' />
          <SocialIcon bgColor='transparent' fgColor='gray' url='https://twitter.com/singay96' target='_blank'/>
        </motion.div>
      </div>
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <motion.div
          initial = {{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}>
          <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In Touch
          </p>
        </motion.div>
      </div>
    </header>
  )
}