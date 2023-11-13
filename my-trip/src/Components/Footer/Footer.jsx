import React,{useEffect} from "react";
import "./footer.css";
import { AiOutlineSend } from "react-icons/ai";
import video2 from "../../assets/video2.mp4";
import { SiYourtraveldottv } from "react-icons/si";
import {FaSquareXTwitter} from "react-icons/fa6";
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  }, [])

  return (
    <section className="footer">
      <div className="videodiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Get In Touch</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter your e-mail id" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <AiOutlineSend className="icon" />
            </button>
          </div>
          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logo Flex">
                  <SiYourtraveldottv className="icon" /> My Trip
                </a>
              </div>
              <div data-aos="fade-up" className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                harum praesentium, consequatur quod laboriosam ratione ut ipsa
                unde a commodi et eum, cumque sunt dolorem? Aut repellendus
                voluptas saepe excepturi.
              </div>
              <div className="footerSocials">
                <FaSquareXTwitter className='icon'/>
                <AiFillFacebook className="icon"/>
                <AiOutlineInstagram className="icon"/>
                <FaTripadvisor className="icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
