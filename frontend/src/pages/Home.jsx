import React from 'react'
import Header from '../components/Header'
import TopDocters from '../components/TopDocters'
import Banner from '../components/Banner'
import SpecialityMenu from '../components/specialityMenu'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDocters/>
      <Banner/>
    </div>
  )
}

export default Home
