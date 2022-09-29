import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img
        initial = {{
          y: -200,
          opacity: 0
        }}
        transition = {{
          duration: 1.2
        }}
        whileInView = {{
          opacity: 1,
          y: 0,
        }}
        viewport = {{
          once: true,
        }}
        className = 'w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='/ProfileImage.gif'
      />
    </article>
  )
}

export default ExperienceCard