'use client'

import React, { useState } from 'react'
import HTMLFlipBook from 'react-pageflip'

import font from '../../public/images/30x30/MD10.jpg'
import back from '../../public/images/30x30/MD20.jpg'
import album_11 from '../../public/images/30x30/1.1.jpg'
import album_12 from '../../public/images/30x30/1.2.jpg'
import album_21 from '../../public/images/30x30/2.1.jpg'
import album_22 from '../../public/images/30x30/2.2.jpg'
import album_31 from '../../public/images/30x30/3.1.jpg'
import album_32 from '../../public/images/30x30/3.2.jpg'
import album_41 from '../../public/images/30x30/4.1.jpg'
import album_42 from '../../public/images/30x30/4.2.jpg'
import album_51 from '../../public/images/30x30/5.1.jpg'
import album_52 from '../../public/images/30x30/5.2.jpg'
import album_61 from '../../public/images/30x30/6.1.jpg'
import album_62 from '../../public/images/30x30/6.2.jpg'
import album_71 from '../../public/images/30x30/7.1.jpg'
import album_72 from '../../public/images/30x30/7.2.jpg'
import album_81 from '../../public/images/30x30/8.1.jpg'
import album_82 from '../../public/images/30x30/8.2.jpg'
import album_91 from '../../public/images/30x30/9.1.jpg'
import album_92 from '../../public/images/30x30/9.2.jpg'
import album_101 from '../../public/images/30x30/10.1.jpg'
import album_102 from '../../public/images/30x30/10.2.jpg'
import album_111 from '../../public/images/30x30/11.1.jpg'
import album_112 from '../../public/images/30x30/11.2.jpg'
import album_121 from '../../public/images/30x30/12.1.jpg'
import album_122 from '../../public/images/30x30/12.2.jpg'
import album_131 from '../../public/images/30x30/13.1.jpg'
import album_132 from '../../public/images/30x30/13.2.jpg'
import album_141 from '../../public/images/30x30/14.1.jpg'
import album_142 from '../../public/images/30x30/14.2.jpg'
import album_151 from '../../public/images/30x30/15.1.jpg'
import album_152 from '../../public/images/30x30/15.2.jpg'
import album_161 from '../../public/images/30x30/16.1.jpg'
import album_162 from '../../public/images/30x30/16.2.jpg'
import album_171 from '../../public/images/30x30/17.1.jpg'
import album_172 from '../../public/images/30x30/17.2.jpg'
import Image from 'next/image'

const DemoBook = (props) => {
  const [page, setPage] = useState()
  const [totalPage, setTotalPage] = useState()

  const onPage = (e) => {
    setPage(e.data)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100dvh',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#465a3d',
      }}
    >
      <HTMLFlipBook
        width={550}
        height={550}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={2000}
        maxShadowOpacity={0.5}
        showCover={true}
      >
        <Image src={font} placeholder="blur" alt="" loading="eager" />
        <Image src={album_11} placeholder="blur" alt="" loading="eager" />
        <Image src={album_12} placeholder="blur" alt="" loading="eager" />
        <Image src={album_21} placeholder="blur" alt="" priority={true} />
        <Image src={album_22} placeholder="blur" alt="" priority={true} />
        <Image src={album_31} placeholder="blur" alt="" priority={true} />
        <Image src={album_32} placeholder="blur" alt="" priority={true} />
        <Image src={album_41} placeholder="blur" alt="" priority={true} />
        <Image src={album_42} placeholder="blur" alt="" priority={true} />
        <Image src={album_51} placeholder="blur" alt="" priority={true} />
        <Image src={album_52} placeholder="blur" alt="" priority={true} />
        <Image src={album_61} placeholder="blur" alt="" priority={true} />
        <Image src={album_62} placeholder="blur" alt="" priority={true} />
        <Image src={album_71} placeholder="blur" alt="" priority={true} />
        <Image src={album_72} placeholder="blur" alt="" priority={true} />
        <Image src={album_81} placeholder="blur" alt="" priority={true} />
        <Image src={album_82} placeholder="blur" alt="" priority={true} />
        <Image src={album_91} placeholder="blur" alt="" priority={true} />
        <Image src={album_92} placeholder="blur" alt="" priority={true} />
        <Image src={album_101} placeholder="blur" alt="" priority={true} />
        <Image src={album_102} placeholder="blur" alt="" priority={true} />
        <Image src={album_111} placeholder="blur" alt="" priority={true} />
        <Image src={album_112} placeholder="blur" alt="" priority={true} />
        <Image src={album_121} placeholder="blur" alt="" priority={true} />
        <Image src={album_122} placeholder="blur" alt="" priority={true} />
        <Image src={album_131} placeholder="blur" alt="" priority={true} />
        <Image src={album_132} placeholder="blur" alt="" priority={true} />
        <Image src={album_141} placeholder="blur" alt="" priority={true} />
        <Image src={album_142} placeholder="blur" alt="" priority={true} />
        <Image src={album_151} placeholder="blur" alt="" priority={true} />
        <Image src={album_152} placeholder="blur" alt="" priority={true} />
        <Image src={album_161} placeholder="blur" alt="" priority={true} />
        <Image src={album_162} placeholder="blur" alt="" priority={true} />
        <Image src={album_171} placeholder="blur" alt="" priority={true} />
        <Image src={album_172} placeholder="blur" alt="" priority={true} />
        <Image src={back} placeholder="blur" alt="" priority={true} />
      </HTMLFlipBook>
    </div>
  )
}

export default DemoBook
