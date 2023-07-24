'use client'

import { m } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { TypingText } from './Text/TypingText'
import Image from 'next/image'

// Image loading
import bio_1 from '../public/images/bio-1.jpg'
import bio_2 from '../public/images/bio-2.jpg'
import paper_texture from '../public/images/theme/paper-texture.jpg'
import paper_scratch from '../public/images/theme/paper-scratch.jpg'

const Bio = () => {
  return (
    <section className="t16-bio min-h-screen grid">
      <div className="t16-container">
        <m.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="upper-part relative"
        >
          <Image
            src={paper_texture}
            alt=""
            placeholder="blur"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="main-content grid grid-cols-12 relative">
            <m.div
              variants={fadeIn('left', 'tween', 0, 1.5)}
              className="content-box col-start-2 col-span-5"
            >
              <div className="story-title color-1 font-heading">
                <TypingText title="Nguyen Anh &nbsp;Tuan" />
              </div>
              <div className="story-content color-1 font-para line-height-normal">
                <p>
                  Tôi hiện đang làm việc trong lĩnh vực công nghệ, một lĩnh vực
                  khá khô khan và thực tế. 
                  <br/>
                  Trong khi đó, vợ tôi lại là một người
                  hoàn toàn trái ngược ân cần, ấm áp, luôn quan tâm và sẵn
                  lòng lắng nghe.
                  <br/>
                  Chính vậy, những trái dấu này lại hút nhau vô cùng!
                </p>
              </div>
            </m.div>
            <div className="img-box col-start-8 col-span-3">
              <m.div variants={fadeIn('right', 'tween', 0, 1.5)}>
                <Image
                  src={bio_1}
                  alt=""
                  placeholder="blur"
                  style={{
                    position: 'relative',
                    maxWidth: '100%',
                    height: '100%',
                    zIndex: 2,
                  }}
                />
              </m.div>
            </div>
          </div>
          <div className="col-span-12">
            <Image
              src={paper_scratch}
              alt=""
              style={{
                position: 'relative',
                marginBottom: '-10px',
                zIndex: 0,
              }}
            />
          </div>
        </m.div>
        <m.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="lower-part relative"
        >
          <div className="main-content grid grid-cols-12 relative">
            <div className="img-box col-start-2 col-span-3">
              <m.div variants={fadeIn('left', 'tween', 0, 1.5)}>
                <Image
                  src={bio_2}
                  alt=""
                  placeholder="blur"
                  style={{
                    position: 'relative',
                    maxWidth: '100%',
                    height: '100%',
                    zIndex: 2,
                  }}
                />
              </m.div>
              {/* <m.img
                variants={fadeIn('left', 'tween', 0, 1.5)}
                src="/images/bio-2.jpg"
                className="max-w-full bride-img relative"
              /> */}
            </div>
            <m.div
              variants={fadeIn('right', 'tween', 0, 1.5)}
              className="content-box col-start-7 col-span-4"
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
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default Bio
