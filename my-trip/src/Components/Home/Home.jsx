import React, {useEffect} from 'react'
import './home.css'
import video from '../../assets/video.mp4'
import {GrMapLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {TbApps} from 'react-icons/tb'
import {BsListUl} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
     Aos.init({duration:1000})
  }, [])

  return (
    <section className='home'>
      <div className="overlaay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div data-aos="fade-up" className="homeContent Container">
        <div className="textDiv"> 

          <span data-aos='fade-up' className='smallText'>
            Our Packages
          </span>

          <h1 data-aos='fade-up' className="homeTitle">
            Search for your Holiday!
          </h1>

        </div>

        <div data-aos="fade-up" className="cardDiv grid">   
         <div className="destinationInput">
            <label htmlFor="city">
              Search your holiday destination:
            </label>
            <div className="input flex">
              <input type="text" placeholder='Destination...'/>
              <GrMapLocation className='icon'/>
            </div>
          </div>
          
          <div className="dateInput">
            <label htmlFor="date">
              Select the Date:</label>
            <div className="input flex">
              <input type="date"/>
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
             <label htmlFor="price">
              Max Price:</label>
             <h3 className="total">₹6000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="6000" min="1000"/>
            </div>
          </div>

          <div className="searchOptions flex">
               <HiFilter className="icons"/>
               <span>More Filters</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <AiFillFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>

          <div className="leftIcons">
             <BsListUl className="icon"/>
             <TbApps className="icon"/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home