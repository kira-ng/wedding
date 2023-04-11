'use client'

import { motion } from 'framer-motion'
import { fadeInCustom, staggerContainer } from '@/utils/motion'
import { TypingText } from './Text/TypingText'

const Album = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      data-widget="album"
      className="t16-album min-h-screen grid"
    >
      <div className="container">
        <motion.div
          variants={fadeInCustom('up', 'tween', 0, 1, 0, 200, 'block')}
          className="title color-1 font-para text-center inner-col mx-auto line-height-normal"
        >
          ALBUM
        </motion.div>
        <motion.div
          variants={fadeInCustom('up', 'tween', 0, 1.3, 0, 200, 'grid')}
          className="album-container inner-col mx-auto relative grid grid-cols-10 aos-init aos-animate"
        >
          <div className="album-item-1 col-span-3">
            <img
              alt=""
              id="iljeuo"
              src="https://image.namtay.vn/fit/600/images/wedsite/EwHDDLF1tB__TUJ3926.jpg"
            />
          </div>
          <div className="album-item-2 col-span-4">
            <img
              alt=""
              id="i0axml"
              src="https://image.namtay.vn/fit/600/images/wedsite/UONP8bcTUO__TUJ1232.jpeg"
            />
          </div>
          <div className="album-item-3 col-span-3">
            <img
              alt=""
              id="ilza9c"
              src="https://image.namtay.vn/fit/600/images/wedsite/Mz8X6ry75X__TUJ3841.jpg"
            />
          </div>
          <div className="album-item-4 col-span-3">
            <img
              alt=""
              id="isx5vi"
              src="https://image.namtay.vn/fit/600/images/wedsite/sNfZLuLvlv__TUJ0002.jpeg"
            />
          </div>
          <div className="album-item-5 col-span-5">
            <img
              alt=""
              id="igtedi"
              src="https://image.namtay.vn/fit/600/images/wedsite/K7tJjbfhOo__TUJ4157.jpg"
            />
          </div>
          <div className="album-item-6 col-span-4">
            <img
              alt=""
              id="ijw7v2"
              src="https://image.namtay.vn/fit/600/images/wedsite/9wuWBE6Pqx__TUJ1148.jpeg"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Album
