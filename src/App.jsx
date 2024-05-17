import Header from './component/Header'
import Banner from './component/Banner'
import About from './component/About'
import Features from './component/Features'
import Team from './component/Team'
import Partner from './component/Partner'
import Cta from './component/Cta'
import Footer from './component/Footer'
import { useEffect } from 'react'
import Aos from 'aos'

export default function App() {
  useEffect(() => {
    Aos.init()
  },[]);
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      <Team />
      <Partner />
      <Cta />
      <Footer />
    </>
  )
}
