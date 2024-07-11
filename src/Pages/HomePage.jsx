import React from 'react'
import Banner from '../components/Banner'
import FindJob from '../components/FindJob'
import JobListings from '../components/JobListings'
import { TabTitle } from '../util/TabTitle'


const HomePage = () => {
  TabTitle('Jmr.Dev');
  return (
    <div>
      <Banner/>
      <FindJob/>
      <JobListings isHome ={true}/>
    </div>
  )
}

export default HomePage
