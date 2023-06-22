'use client'

import { m } from 'framer-motion'
import { fadeIn, fadeInCustom, staggerContainer } from '@/utils/motion'

const Header = () => {
  return (
    <m.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="i9sb"
      className="t16-intro min-h-screen grid place-center"
    >
      <div className="container grid place-center">
        <m.div
          variants={fadeInCustom('up', 'tween', 0, 2, 0, 250)}
          className="flex font-heading name-wrapper ml5 flex-col-bm items-baseline justify-center-mb text-center-mb"
        >
          <div className="name font-inherit color-3 letters-left">
            <p>Anh &nbsp;Tuan</p>
          </div>
          <div>
            <img
              src="/images/ampersand.png"
              alt=""
              className="ampersand color-3"
            />
          </div>
          <div className="name font-inherit color-3 letters-right">
            <p>Vu Quynh</p>
          </div>
        </m.div>
        <m.div
          variants={fadeIn('up', 'tween', 0, 1)}
          className="event-time font-para color-3 text-center inner-col mx-auto"
        >
          <p>12 . 08 . 2023</p>
        </m.div>
      </div>
    </m.section>
  )
}

export default Header
