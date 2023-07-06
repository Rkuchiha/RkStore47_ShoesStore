import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import Hero_Image from "../../assets/hero_image.png";
import Hero_Image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter'
import { fadeIn } from "../../assets/utils/motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      {/* Header */}
      <div className="left-side">
        <Header />

        {/* Hover Adv */}
        <div className="best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Fitness Club in the Town</span>
        </div>

        {/* Slogan */}
        <div className="hero-text">
          <motion.div
           variants={fadeIn('right','spring',0.4,0.7)}
           initial="hidden"
           whileInView="show"
          >
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </motion.div>

          <motion.div
           variants={fadeIn('left','spring',0.8,0.7)}
           initial="hidden"
           whileInView="show"
          >
            <span>Ideal </span>
            <span className="stroke-text">Body</span>
          </motion.div>

          <div>
            <span>
              In Here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Details about Gym */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span><NumberCounter end={976} start={850} delay='4' preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={35} delay='4' preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Strated</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-side">
        <button className="btn">Join Us</button>

        <motion.div
          initial={{ left: "2rem" }}
          whileInView={{ left: "7rem" }}
          transition={transition}
          className="heart"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <motion.img
        variants={fadeIn('right','spring',0.3,0.7)}
        initial="hidden"
        whileInView="show"
        src={Hero_Image} alt="" className="Hero_Image" />
        <motion.img
          initial={{ left: mobile ? "15rem" : "-5rem" }}
          whileInView={{ left: mobile ? "7rem" : "-15rem" }}
          transition={transition}
          src={Hero_Image_back}
          alt=""
          className="Hero_Image_back"
        />
        <motion.div
          initial={{ left: "-45rem" }}
          whileInView={{ left: "-35rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
