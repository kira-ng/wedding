'use client'

import { motion } from 'framer-motion'
import { fadeIn, fadeInCustom, staggerContainer } from '@/utils/motion'

const Header = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="i9sb"
      className="t16-intro min-h-screen grid place-center"
    >
      <div className="container grid place-center">
        <motion.div
          variants={fadeInCustom('up', 'tween', 0, 2, 0, 300)}
          className="flex font-heading name-wrapper ml5 flex-col-bm items-baseline justify-center-mb text-center-mb"
        >
          <div className="name font-inherit color-2 letters-left">
            <p>Anh &nbsp;Tuan</p>
          </div>
          <div>
            <img src="/images/ampersand.png" alt="" className="ampersand" />
          </div>
          <div className="name font-inherit color-2 letters-right">
            <p>Vu Quynh</p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0, 1)}
          className="event-time font-para color-2 text-center inner-col mx-auto"
        >
          <p>12 . 08 . 2023</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Header
