import React from 'react'
import HomePageBanner from '../../components/Banner/HomePageBanner';
import "./Home.css" ;

const Home = (props) => {

  const {loading} = props ;


  return (
    <div className='home-page-container'>
        <HomePageBanner loading={loading}/>
    </div>
  )
}

export default Home
