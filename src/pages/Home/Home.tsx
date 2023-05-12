import { Navbar, SectionWrapper } from '@/components'
import { Contact, Footer, Header, Works } from './components'
import { Experience } from '@/pages/Home/components/Experience/Experience'
import SkillBars from '@/pages/Home/components/SkillBars/SkillBars'
import { skills } from '@/constants'

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <SectionWrapper Component={<Experience />} idName={'Experience'} />
      <SectionWrapper Component={<Works />} idName={'Works'} />
      <SectionWrapper Component={<SkillBars hue='300' saturation='40' skills={skills} />} idName={'Skills'} />
      <SectionWrapper Component={<Contact />} idName={'Contact'} />
      <Footer />
    </>
  )
}

export default Home
