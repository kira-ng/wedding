'use client'

import { m } from 'framer-motion'
import { fadeInCustom, staggerContainer } from '@/utils/motion'

const Album = () => {
  return (
    <m.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      data-widget="album"
      className="t16-album min-h-screen grid"
    >
      <div className="container">
        <m.div
          variants={fadeInCustom('up', 'tween', 0, 1, 0, 200)}
          className="title color-1 font-para text-center inner-col mx-auto line-height-normal"
        >
          ALBUM
        </m.div>
        <m.div
          variants={fadeInCustom('up', 'tween', 0, 1.3, 0, 200)}
          className="album-container inner-col mx-auto relative grid grid-cols-10 aos-init aos-animate"
        >
          <div className="album-item-1 col-span-3">
            <img alt="" id="iljeuo" src="/images/album-2.jpg" />
          </div>
          <div className="album-item-2 col-span-4">
            <img alt="" id="i0axml" src="/images/album-1.jpg" />
          </div>
          <div className="album-item-3 col-span-3">
            <img alt="" id="ilza9c" src="/images/album-3.jpg" />
          </div>
          <div className="album-item-4 col-span-3">
            <img alt="" id="isx5vi" src="/images/album-5.jpg" />
          </div>
          <div className="album-item-5 col-span-5">
            <img alt="" id="igtedi" src="/images/album-4.jpg" />
          </div>
          <div className="album-item-6 col-span-4">
            <img alt="" id="ijw7v2" src="/images/album-6.jpg" />
          </div>
        </m.div>
      </div>
    </m.section>
  )
}

export default Album
