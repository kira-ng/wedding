'use client'

import localFont from 'next/font/local'
import dynamic from 'next/dynamic'
import { domAnimation } from 'framer-motion'
// components
import Album from '@/components/Album'
import Bio from '@/components/Bio'
import Donate from '@/components/Donate'
import EventInfo from '@/components/EventInfo'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SaveTheDate from '@/components/SaveTheDate'
import Story from '@/components/Story'
import TimeLine from '@/components/TimeLine'
import LoadingDefault from '@/components/Loading/LoadingDefault'

// Firebase
import { doc } from 'firebase/firestore'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '@/firebase'

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: '../../../public/fonts/AbsoluteBeautyScriptBold.otf',
})

const LazyMotion = dynamic(
  () => import('framer-motion').then((mod) => mod.LazyMotion),
  {
    ssr: false,
    loading: () => <LoadingDefault />,
  }
)

type Props = {
  params: {
    id: string
  }
}

const GuestPage = ({ params: { id } }: Props) => {
  const [guests, loading, error] = useDocument(doc(db, 'guests', id))

  if (loading) {
    return <LoadingDefault />
  }

  if (guests?.exists()) {
    console.log(guests?.data())
  } else {
    window.location.href = '/'
  }

  return (
    <div className={myFont.className + ' overflow-x-hidden'}>
      <LazyMotion features={domAnimation}>
        <Header />
        <EventInfo data={guests?.data()} />
        <TimeLine />
        <Story />
        <Bio />
        <Album />
        <SaveTheDate />
        <Footer />
      </LazyMotion>
    </div>
  )
}

export default GuestPage
