import Image from 'next/image'

// Image loading
import paper_texture from '../public/images/theme/paper-texture.jpg'
import marker from '../public/images/theme/marker.gif'


type Props = {
  data?: any
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
        {data && (
          <>
            <div className="guest-title inner-col text-center mx-auto font-para color-1 line-height-normal">
              TRÂN TRỌNG KÍNH MỜI
            </div>
            <div className="guest-name inner-col text-center mx-auto font-oooh-baby color-1 line-height-normal">
              {data.name}
            </div>
            <div className="guest-subtitle inner-col text-center mx-auto font-para color-1 line-height-normal">
              {data.to}
            </div>
            <div className="date inner-col text-center mx-auto font-para color-1 line-height-normal">
              --------------------------
            </div>
          </>
        )}
        <div className="date inner-col text-center mx-auto font-para color-1 line-height-normal">
          Lễ Thành Hôn được tổ chức vào hồi
        </div>
        <div className="date inner-col text-center mx-auto font-para color-1 line-height-normal">
          <strong>11H00</strong> | THỨ BẢY
        </div>
        <div className="datetime inner-col text-center mx-auto font-para color-1 line-height-normal">
          <p>12 . 08 . 2023</p>
        </div>
        <div className="place event-place inner-col mx-auto text-center font-para color-1 line-height-normal">
          <a
            href="https://goo.gl/maps/X4vJVvJFyh2cDVKU6"
            target="_blank"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            KHÁCH SẠN DRAGON STYLE, SỐ 25 ĐƯỜNG LÊ LỢI, TP. SẦM SƠN, THANH HÓA
          </a>
        </div>
        <div className="maps inner-col mx-auto text-center font-para color-1 line-height-normal">
          <a href="https://goo.gl/maps/X4vJVvJFyh2cDVKU6" target="_blank">
            <Image src={marker} alt="" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventInfo
