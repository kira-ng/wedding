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

const Page = () => {
  return (
    <div>
      <Header />
      <EventInfo />
      <TimeLine />
      <Story />
      <Bio />
      <Album />
      <SaveTheDate />
      <Footer />
      <Donate />
    </div>
  )
}

export default Page
