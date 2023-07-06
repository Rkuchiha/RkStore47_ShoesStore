import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";

const Testimonials = () => {

  const transition = { type: "spring", duration: 3 };

  const [select, setSelect] = useState(0);
  const T_length = testimonialsData.length;

  return (
    <div className="Testimonials" id="Testimonials">
      <div className="left-test">
        <span>Testimonials</span>
        <motion.span
          variants={fadeIn('right','spring',0.5,0.75)}
          initial="hidden"
          whileInView="show" className="stroke-text">What They</motion.span>
        <motion.span
          variants={fadeIn('right','spring',0.8,0.75)}
          initial="hidden"
          whileInView="show">Say about us</motion.span>

        <motion.span
         key={select}
         initial={{ opacity:0,x:-100 }}
         animate={{ opacity:1,x:0  }}
         exit={{ opacity:0,x:100  }}
         transition={{ ...transition}}
        >{testimonialsData[select].review}</motion.span>
        <span>
          <span style={{ color: "var(--diffrent)" }}>
            {testimonialsData[select].name}
          </span>{" "}
          - {testimonialsData[select].status}
        </span>
      </div>
      <div className="right-test">
        <motion.div
        variants={fadeIn('right','spring',0.5,0.5)}
        initial="hidden"
        whileInView="show"
        ></motion.div>
        <motion.div
           variants={fadeIn('left','spring',0.8,0.75)}
           initial="hidden"
           whileInView="show"
        ></motion.div>
        <motion.img 
        key={select}
        initial={{ opacity:0,x:100 }}
        animate={{ opacity:1,x:0  }}
        exit={{ opacity:0,x:-100  }}
        transition={{ ...transition}}
        src={testimonialsData[select].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              select === 0
                ? setSelect(T_length - 1)
                : setSelect((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img 
          onClick={() => {
            select === T_length-1
              ? setSelect(0)
              : setSelect((prev) => prev + 1);
          }}
          src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
