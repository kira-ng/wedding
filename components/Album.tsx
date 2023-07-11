'use client'

import { m } from 'framer-motion'
import { fadeInCustom, staggerContainer } from '@/utils/motion'
import Image from 'next/image'

// Image loading
import album_1 from '../public/images/album-1.jpg'
import album_2 from '../public/images/album-2.jpg'
import album_3 from '../public/images/album-3.jpg'
import album_4 from '../public/images/album-4.jpg'
import album_5 from '../public/images/album-5.jpg'
import album_6 from '../public/images/album-6.jpg'

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
          className="album-container inner-col mx-auto relative grid grid-cols-10"
        >
          <div className="album-item-1 col-span-3">
            <Image src={album_2} placeholder="blur" alt="" />
          </div>
          <div className="album-item-2 col-span-4">
            <Image src={album_1} placeholder="blur" alt="" />
          </div>
          <div className="album-item-3 col-span-3">
            <Image src={album_3} placeholder="blur" alt="" />
          </div>
          <div className="album-item-4 col-span-3">
            <Image src={album_5} placeholder="blur" alt="" />
          </div>
          <div className="album-item-5 col-span-5">
            <Image src={album_4} placeholder="blur" alt="" />
          </div>
          <div className="album-item-6 col-span-4">
            <Image src={album_6} placeholder="blur" alt="" />
          </div>
        </m.div>
      </div>
    </m.section>
  )
}

export default Album
