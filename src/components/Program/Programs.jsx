import React from "react";
import "./Programs.css";
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="headers">
        <motion.span
         variants={fadeIn('right','spring',0.3,0.7)}
         initial="hidden"
         whileInView="show"
        className="stroke-text">Explore Our</motion.span>
        <motion.span
         variants={fadeIn('right','spring',0.6,0.7)}
         initial="hidden"
         whileInView="show"
        >Programs</motion.span>
        <motion.span
         variants={fadeIn('right','spring',0.9,0.7)}
         initial="hidden"
         whileInView="show"
        className="stroke-text">to Shape You</motion.span>
      </div>

      <div className="programs-cards">
        {programsData.map((program)=>(
          <div className="category">
            <span className="img">{program.image}</span>
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
