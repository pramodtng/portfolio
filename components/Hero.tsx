/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'
import ProfileImage from '../public/ProfileImage.gif'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Promod Tamang",
      "Guy-who-loves-Coffee.tsx",
      "<Coder/>"
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <Image src={ProfileImage} alt="profile-image" height={150} width={150} className='relative rounded-full object-cover mx-auto' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7ABBA' />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='hero-button'>About</button>
          </Link>
          <Link href="#skills">
            <button className='hero-button'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='hero-button'>Projects</button>
          </Link>
          <Link href="#experience">
            <button className='hero-button'>Experience</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Hero