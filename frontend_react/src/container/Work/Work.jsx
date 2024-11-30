import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';

import { AppWrapp, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const[animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
    .then((data) => {
      setWorks(data);
      setFilterWork(data);
    })

  }, [])

  const handleworkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([{ y:0, opacity: 1 }])

      if(item === 'All'){
        setFilterWork(works);
      } else{
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }

  return (
    <>
        <div className="headd">
    <h2 className="head-text">My <span> Creative</span> Projects !</h2>
    </div>

    <div className="app__work-filter">
      {['All', 'UI/UX', 'React JS', 'Web App', 'Mobile App', 'Website'].map((item, index) => (
        <div
        key={index}
        onClick={() => handleworkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
    
    <motion.div 

    animate={animateCard}
    transition={{ duration: 0.5, delayChildren: 0.5}}
    className="app__work-portfolio"
    
    >
      {filterWork.map((work, index) => (
  <div className="app__work-item app__flex" key={index}>
    <div className="app__work-img app__flex">
      <img src={urlFor(work.imgUrl)} alt={work.name} />

      <motion.div
whileHover={{ opacity: 1 }} // Set opacity to 1 while hovering
initial={{ opacity: 0 }} // Set initial opacity to 0
transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
className="app__work-hover app__flex"
      >

        <a href= {work.projectLink} target="_blank" rel="noreferrer">

          <motion.div
                whileInView={{scale: [0, 1]}}
                whileHover={{ scale: [1, 0.9]}}
                transition={{ duration: 0.25}}
                className= "app__flex"
          
          
          >
            <AiFillEye />

          </motion.div>

        </a>


        





      </motion.div>


    </div>

    <div className="app__work-content app__flex">
      <h4 className="bold-text">{work.title}</h4>
      <p className="pp-text" style={{ marginTop: 10 }}>{work.description}</p>

      <div className="app__work-tag app__flex">
        <p className="pp-text">{work.tags[0]}</p>
        </div>    
    
    </div>


  </div>
))}


    </motion.div>

    </>
  )
}

export default AppWrapp(
  MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg"
  );

