'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, fadeInCustom } from '@/utils/motion'

const TimeLine = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="t16-events bg-texture grid"
    >
      <div className="container grid place-center">
        <motion.div
          variants={fadeIn('up', 'tween', 0, 0.5)}
          className="title color-1 font-para text-center inner-col mx-auto line-height-normal animate__animated animate__fadeInUp animate__slow aos-init aos-animate"
        >
          <p>TIMELINE</p>
        </motion.div>
        <div className="events-wrapper grid items-center relative">
          <motion.div
            variants={fadeIn('left', 'tween', 0, 0.4)}
            className="event-point grid aos-init aos-animate"
          >
            <div className="icon-box text-center">
              <img
                src="https://static.namtay.vn/assets/img/theme16/gate.png"
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
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0, 0.8)}
            className="event-point grid aos-init aos-animate"
          >
            <div className="icon-box text-center">
              <img
                src="https://static.namtay.vn/assets/img/theme16/ring-2.png"
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
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0, 1.2)}
            className="event-point grid aos-init aos-animate"
          >
            <div className="icon-box text-center">
              <img
                src="https://static.namtay.vn/assets/img/theme16/plate-2.png"
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
          </motion.div>
          <motion.div
            variants={fadeInCustom('left', 'tween', 0, 2, 100, 100, 'block')}
            className="event-point grid aos-init aos-animate"
          >
            <div className="icon-box text-center">
              <img
                src="https://static.namtay.vn/assets/img/theme16/firework-2.png"
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default TimeLine
