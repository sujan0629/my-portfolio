"use client"
import React from 'react'
import { easeInOut, motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'

import { AppWrapp } from '../../wrapper';
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
  scale: [0, 1],
  opacity: [0, 1],
  transition: {
    duration: 1,
    ease: 'easeInOut'
  }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div 
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{duration: 0.5 }}
      className="app__header-info"
      >

<div className="app__header-badge">
<div className="badge-cmp app__flex">
    <span>👋</span>
    <div style={{ marginLeft: 20 }}>
      <p className="p-text">Hello, I am</p>
      <TypeAnimation 
      sequence={[
      'Sujan Bhatta',
      1000,
      'Student',
      1000,
      'Web Developer',
      1000,
      'App Developer',
      1000,
      'expert in UI/UX',
      1000,
      'Web Designer',
      1000,


      
      
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '0.9em', display: 'inline-block', fontWeight:'700', color:'White'}}
      repeat= {Infinity}
      />
    </div>

 </div>
  <div className="tag-cmp app__flex">
    <p className="p-text"><a href="#footer">Say Hello ➤</a></p>
    </div>
</div>
      </motion.div>

      <motion.div

      whileInView={{ opacity: [0, 1] }}
      transition={{duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />




      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header__circles"

      >
        {[images.sass, images.node, images.python].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />

          </div>
        ) )}



      </motion.div>



    </div>
  )
}

export default AppWrapp(Header,'home');
