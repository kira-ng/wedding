import Image from 'next/image'

// Image loading
import paper_texture from '../public/images/theme/paper-texture.jpg'

const EventInfo = () => {
  return (
    <section data-widget="event-info" className="t16-event-info grid relative">
      <Image
        src={paper_texture}
        alt=""
        placeholder="blur"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container grid place-center">
        <div className="date inner-col text-center mx-auto font-para color-1 line-height-normal">
          SATURDAY
        </div>
        <div className="datetime inner-col text-center mx-auto font-para color-1 line-height-normal">
          <p>12 . 08 . 2023</p>
        </div>
        <div className="place event-place inner-col mx-auto text-center font-para color-1 line-height-normal">
          DRAGON STYLE, 25 LE LOI STREET, SAM SON, THANH HOA
        </div>
      </div>
    </section>
  )
}

export default EventInfo
