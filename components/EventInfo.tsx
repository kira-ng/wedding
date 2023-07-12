import Image from 'next/image'

// Image loading
import paper_texture from '../public/images/theme/paper-texture.jpg'

type Props = {
  data: any
}

const EventInfo = ({ data }: Props) => {
  console.log(data)

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
        <div className="guest-title inner-col text-center mx-auto font-para color-1 line-height-normal">
          TRÂN TRỌNG KÍNH MỜI
        </div>
        <div className="guest-name inner-col text-center mx-auto font-oooh-baby color-1 line-height-normal">
          {data && <> {data.to + ' ' + data.name} </>}
        </div>
        <div className="guest-subtitle inner-col text-center mx-auto font-para color-1 line-height-normal">
          Tới dự bữa tiệc chung vui cùng gia đình chúng tôi
        </div>
        <div className="date inner-col text-center mx-auto font-para color-1 line-height-normal">
          --------------------------
        </div>
        <div className="date inner-col text-center mx-auto font-para color-1 line-height-normal">
          THỨ BẢY
        </div>
        <div className="datetime inner-col text-center mx-auto font-para color-1 line-height-normal">
          <p>12 . 08 . 2023</p>
        </div>
        <div className="place event-place inner-col mx-auto text-center font-para color-1 line-height-normal">
          KHÁCH SẠN DRAGON STYLE, SỐ 25 ĐƯỜNG LÊ LỢI, TP. SẦM SƠN, THANH HÓA
        </div>
      </div>
    </section>
  )
}

export default EventInfo
