import React, { useRef } from "react";
import './Join.css'
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";

const Join = () => {

    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('0000', 'template_69jek3o', form.current, 'P1-egyowhMfu14-lM')
    
        e.target.reset()
      };

  return (
    <div className="Join">
      <div className="left-join">
        <hr />
        <div>
          <motion.span
           variants={fadeIn('right','spring',0.3,0.7)}
           initial="hidden"
           whileInView="show" className="stroke-text">READY TO </motion.span>
          <motion.span
           variants={fadeIn('right','spring',0.6,0.7)}
           initial="hidden"
           whileInView="show"
          >LEVEL UP</motion.span>
        </div>
        <div>
          <motion.span
           variants={fadeIn('right','spring',0.9,0.7)}
           initial="hidden"
           whileInView="show"
          >YOUR BODY </motion.span>
          <motion.span
           variants={fadeIn('right','spring',1.2,0.7)}
           initial="hidden"
           whileInView="show"
            className="stroke-text">WITH US?</motion.span>
        </div>
      </div>
      <motion.div
       variants={fadeIn('up','spring',1.2,0.75)}
       initial="hidden"
       whileInView="show" className="right-join">
        <form ref={form} className="email-container" onClick={sendEmail}>
            <input type="email" name="email" placeholder="Enter Your Email ID" />
            <button type="submit" className="btn btn-join">JOIN NOW</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Join;
