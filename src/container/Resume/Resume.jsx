import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor , client } from '../../client';

import './Resume.scss';
import { images } from '../../constants';

const Resume = () => {

  return (
    <>
      <h2 className='head-text'>Still need my CV ?</h2>

        <div className='app__resume-container'>
            <motion.div className='app__resume-con'>

                <motion.div className="app__resume-content">
                    By sharing my CV here, I aim to offer a glimpse into my professional voyage. It serves as a testament to my commitment to continuous growth and my enthusiasm for contributing meaningfully to the projects I undertake.

                    <br /><br />

                    Furthermore, I believe that transparency is key in any professional relationship. By making my CV readily available, I hope to foster trust and demonstrate that I'm invested in open communication and collaboration.
                </motion.div>

                <button className='app_resume-button'>
                    Download CV
                </button>

            </motion.div>

            <motion.div className='app__resume-illustration'>
                    <img className='app__resume-img' src={images.resume} alt="resume illusration" />
            </motion.div>
        </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Resume, 'app__resume'),
  'resume',
  'app__primarybg'
); 