'use client'

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

const LazyMotion = dynamic(
  () => import('framer-motion').then((mod) => mod.LazyMotion),
  {
    ssr: false,
    loading: () => <LoadingDefault />,
  }
)

const Page = () => {
  // return <LoadingDefault />
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <EventInfo />
      <TimeLine />
      <Story />
      <Bio />
      <Album />
      <SaveTheDate />
      <Footer />
      <Donate />
    </LazyMotion>
  )
}

export default Page
