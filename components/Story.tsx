'use client'

import { m } from 'framer-motion'
import { fadeIn, fadeInCustom, staggerContainer } from '@/utils/motion'
import { TypingText } from './Text/TypingText'

const Story = () => {
  return (
    <m.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="t16-story relative min-h-screen grid place-center"
    >
      <div className="overlay absolute"></div>
      <div className="container grid relative collages grid-cols-12">
        <m.div
          variants={fadeIn('right', 'tween', 0, 1)}
          className="image-collage-box relative col-span-5 col-start-2 aos-init aos-animate"
        >
          <div className="relative collage-1 absolute">
            <img alt="" src="/images/story-1.jpg" className="image-fit" />
          </div>
          <div className="relative collage-2 absolute">
            <img alt="" src="/images/story-2.jpg" className="image-fit" />
          </div>
          <div className="relative collage-3 absolute">
            <img
              id="image-clip"
              alt=""
              src="/images/story-3.jpg"
              className="image-fit"
            />
          </div>
          <m.div
            variants={fadeIn('down', 'tween', 0.8, 1)}
            className="vertical-text absolute aos-init aos-animate"
          >
            <div className="content-vertical color-2 font-para text-right">
              <p>we are so grateful to be surrounded&nbsp;</p>
              <p>by friends &amp; family on our happiest day.</p>
            </div>
          </m.div>
        </m.div>
        <m.div
          variants={fadeInCustom('left', 'tween', 0.4, 1, 100, 100)}
          className="content-box col-span-4 col-start-8 aos-init aos-animate"
        >
          <div className="story-title color-2 font-heading">
            <TypingText title="Our love story" />
          </div>
          <div className="story-content color-2 font-para line-height-normal">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </m.div>
      </div>
    </m.section>
  )
}

export default Story
