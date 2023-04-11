'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { TypingText } from './Text/TypingText'

const SaveTheDate = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="t16-rsvp grid place-center"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0, 1)}
        className="container inner-col mx-auto aos-init aos-animate"
      >
        <div className="t16-rsvp-content asking-txt parent-fr flex flex-col text-center items-center">
          <div className="question color-1 font-para">
            <p>SAVE THE DATE</p>
          </div>
          <div className="explain color-1 font-para inner-col text-center">
            <p>
              Đám cưới sẽ&nbsp;trọn vẹn &amp; ý nghĩa&nbsp;hơn khi có sự hiện
              diện &amp; chúc phúc của bạn.&nbsp;Hãy xác nhận sự có mặt của mình
              để Ly &amp; Đức Anh&nbsp;chuẩn bị đón tiếp chu đáo nhất nha!&nbsp;
            </p>
            <p>&nbsp;</p>
            <p>(Bạn có thể nhấn bỏ qua phần quà mừng tại đây). Thân&nbsp;💛</p>
          </div>
        </div>
        <div className="form-wr">
          <form method="post" className="form inner-col">
            <div className="form-control grid">
              <label htmlFor="name" className="form-label font-para color-1">
                Tên của bạn
              </label>
              <input type="text" id="name" required className="font-para" />
            </div>
            <div className="form-control grid">
              <label htmlFor="tel" className="form-label font-para color-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="tel"
                pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                required
                className="font-para"
              />
            </div>
            <div className="form-question">
              <div className="btn-wrap flex items-center justify-between">
                <div className="btn-box">
                  <input
                    id="t16-yes"
                    type="radio"
                    name="rsvp"
                    value="yes"
                    required
                    className="form-radio color-1"
                  />
                  <label
                    htmlFor="t16-yes"
                    className="form-btn-text font-para color-1"
                  >
                    Có
                  </label>
                </div>
                <div className="btn-box">
                  <input
                    id="t16-no"
                    type="radio"
                    name="rsvp"
                    value="no"
                    required
                    className="form-radio color-1"
                  />
                  <label
                    htmlFor="t16-no"
                    className="form-btn-text font-para color-1"
                  >
                    Không
                  </label>
                </div>
              </div>
            </div>
            <div className="form-submit-wrap text-center">
              <button className="form-submit font-para">Phản hồi</button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default SaveTheDate
