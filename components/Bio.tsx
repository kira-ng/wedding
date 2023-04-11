'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { TypingText } from './Text/TypingText'

const Bio = () => {
  return (
    <section className="t16-bio min-h-screen grid">
      <div className="t16-container">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="upper-part bg-texture"
        >
          <div className="main-content grid grid-cols-12 relative">
            <motion.div
              variants={fadeIn('left', 'tween', 0, 1.5)}
              className="content-box col-start-2 col-span-5 aos-init aos-animate"
            >
              <div className="story-title color-1 font-heading">
                <TypingText title="Nguyen Anh &nbsp;Tuan" />
              </div>
              <div className="story-content color-1 font-para line-height-normal">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </motion.div>
            <div className="img-box col-start-8 col-span-3">
              <motion.img
                variants={fadeIn('right', 'tween', 0, 1.5)}
                src="https://image.namtay.vn/fit/550/images/wedsite/J7AJTPCjLc_tmp.png"
                className="max-w-full groom-img relative aos-init aos-animate"
              />
            </div>
          </div>
          <div className="col-span-12">
            <img
              src="https://static.namtay.vn/assets/img/theme16/paper-scratch.png"
              alt=""
              className="img-paper-scratch relative"
            />
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="lower-part relative"
        >
          <div className="main-content grid grid-cols-12 relative">
            <div className="img-box col-start-2 col-span-3">
              <motion.img
                variants={fadeIn('left', 'tween', 0, 1.5)}
                src="https://image.namtay.vn/fit/550/images/wedsite/lt8ByvAu1F_IMG_0959.JPG"
                className="max-w-full bride-img relative aos-init aos-animate"
              />
            </div>
            <motion.div
              variants={fadeIn('right', 'tween', 0, 1.5)}
              className="content-box col-start-7 col-span-4 aos-init aos-animate"
            >
              <div className="story-title color-2 font-heading">
                <TypingText title="Vu Thi Quynh" />
              </div>
              <div className="story-content color-2 font-para line-height-normal">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Bio
