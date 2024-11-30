import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip'

import { AppWrapp, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss'

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
    .then((data) => {
      setExperience(data);
    })
    client.fetch(skillsQuery)
    .then((data) => {
      setSkills(data);
    })

  }, [])


  return (
    <>
    <div className="headd">
    <h2 className="head-text">Sk<span>i</span>lls</h2>
    </div>

    <div className="app__skills-container">
      <motion.div className="app__skills-lists">
        {skills.map((skill) => (
          <motion.div
          whileInView={{opacity: [0, 1]}}
          transition={{ duration: 0.5}}
          className="app__skills-item app__flex"
          key={skill.name}
          
          >
            <div className="app__flex" style={{ backgroundColor: skill.bgcolor }}>
              <img className='image-skills' src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>

          </motion.div>
        ))}


      </motion.div>
    </div>
    </>
  )
}

export default AppWrapp(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
  );
