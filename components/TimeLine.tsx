'use client'

import { m } from 'framer-motion'
import { staggerContainer, fadeIn, fadeInCustom } from '@/utils/motion'

const TimeLine = () => {
  return (
    <m.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="t16-events bg-texture grid"
    >
      <div className="container grid place-center">
        <m.div
          variants={fadeIn('up', 'tween', 0, 0.5)}
          className="title color-1 font-para text-center inner-col mx-auto line-height-normal animate__animated animate__fadeInUp animate__slow aos-init aos-animate"
        >
          <p>TIMELINE</p>
        </m.div>
        <div className="events-wrapper grid items-center relative">
          <m.div
            variants={fadeIn('left', 'tween', 0, 0.4)}
            className="event-point grid aos-init aos-animate"
          >
            <div className="icon-box text-center">
              <img
                src="/images/theme/gate.png"
                alt=""
                className="event-icons"
              />
            </div>
            <div className="content-box">
              <div className="time font-para color-1 line-height-normal text-center">
                <p>15:30 PM</p>
              </div>
              <div className="event-title font-heading color-1 text-center">
                welcome
              </div>
            </div>
          </m.div>
          <m.div
            variants={fadeIn('left', 'tween', 0, 0.8)}
            className="event-point grid aos-init aos-animate"
          >
            <div className="icon-box text-center">
              <img
                src="/images/theme/ring-2.png"
                alt=""
                className="event-icons"
              />
            </div>
            <div className="content-box">
              <div className="time font-para color-1 line-height-normal text-center">
                <p>16:00 PM</p>
              </div>
              <div className="event-title font-heading color-1 text-center">
                ceremony
              </div>
            </div>
          </m.div>
          <m.div
            variants={fadeIn('left', 'tween', 0, 1.2)}
            className="event-point grid aos-init aos-animate"
          >
            <div className="icon-box text-center">
              <img
                src="/images/theme/plate-2.png"
                alt=""
                className="event-icons"
              />
            </div>
            <div className="content-box">
              <div className="time font-para color-1 line-height-normal text-center">
                <p>18:00 PM</p>
              </div>
              <div className="event-title font-heading color-1 text-center">
                dinner
              </div>
            </div>
          </m.div>
          <m.div
            variants={fadeInCustom('left', 'tween', 0, 2, 100, 100)}
            className="event-point grid aos-init aos-animate"
          >
            <div className="icon-box text-center">
              <img
                src="/images/theme/firework-2.png"
                alt=""
                className="event-icons"
              />
            </div>
            <div className="content-box">
              <div className="time font-para color-1 line-height-normal text-center">
                <p>21:00 PM</p>
              </div>
              <div className="event-title font-heading color-1 text-center">
                after party
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </m.section>
  )
}

export default TimeLine
