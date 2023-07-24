'use client'

import { m } from 'framer-motion'
import { staggerContainer, fadeIn, fadeInCustom } from '@/utils/motion'
import Image from 'next/image'

// Image loading
import paper_texture from '../public/images/theme/paper-texture.jpg'
import gateIcon from '../public/images/theme/gate.png'
import ringIcon from '../public/images/theme/ring-2.png'
import plateIcon from '../public/images/theme/plate-2.png'
import fireworkIcon from '../public/images/theme/firework-2.png'

const TimeLine = () => {
  return (
    <m.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="t16-events grid relative"
    >
      <Image
        src={paper_texture}
        alt=""
        placeholder="blur"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container grid place-center">
        <m.div
          variants={fadeIn('up', 'tween', 0, 0.5)}
          className="title color-1 font-para text-center inner-col mx-auto line-height-normal animate__animated animate__fadeInUp animate__slow"
        >
          <p>TIMELINE</p>
        </m.div>
        <div className="events-wrapper grid items-center relative">
          <m.div
            variants={fadeIn('left', 'tween', 0, 0.4)}
            className="event-point grid"
          >
            <div className="icon-box text-center">
              <Image src={fireworkIcon} alt="" width={94} height={94}/>
            </div>
            <div className="content-box">
              <div className="time font-para color-1 line-height-normal text-center">
                <p>9:45 AM</p>
              </div>
              <div className="event-title font-heading color-1 text-center font-oooh-baby">
                Rước dâu
              </div>
            </div>
          </m.div>
          <m.div
            variants={fadeIn('left', 'tween', 0, 0.8)}
            className="event-point grid"
          >
            <div className="icon-box text-center">
              <Image src={gateIcon} alt="" width={94} height={94}/>
            </div>
            <div className="content-box">
              <div className="time font-para color-1 line-height-normal text-center">
                <p>11:00 AM</p>
              </div>
              <div className="event-title font-heading color-1 text-center font-oooh-baby">
                Đón khách
              </div>
            </div>
          </m.div>
          <m.div
            variants={fadeIn('left', 'tween', 0, 1.2)}
            className="event-point grid"
          >
            <div className="icon-box text-center">
              <Image src={ringIcon} alt="" width={94} height={94}/>
            </div>
            <div className="content-box">
              <div className="time font-para color-1 line-height-normal text-center">
                <p>11:30 AM</p>
              </div>
              <div className="event-title font-heading color-1 text-center font-oooh-baby">
                Làm lễ
              </div>
            </div>
          </m.div>
          <m.div
            variants={fadeInCustom('left', 'tween', 0, 2, 100, 100)}
            className="event-point grid"
          >
            <div className="icon-box text-center">
              <Image src={plateIcon} alt="" width={94} height={94}/>
            </div>
            <div className="content-box">
              <div className="time font-para color-1 line-height-normal text-center">
                <p>11:45 AM</p>
              </div>
              <div className="event-title font-heading color-1 text-center font-oooh-baby">
                Khai tiệc
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </m.section>
  )
}

export default TimeLine
