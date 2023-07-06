import React from "react";
import "./reasons.css";
import Img1 from "../../assets/image1.png";
import Img2 from "../../assets/image2.png";
import Img3 from "../../assets/image3.png";
import Img4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nd from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import { fadeIn } from "../../assets/utils/motion";
import { motion } from "framer-motion";

const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
      <div className="left-part">
        <motion.img
          variants={fadeIn("right", "spring", 0.4, 0.75)}
          initial="hidden"
          whileInView="show"
          src={Img1}
          alt=""
        />
        <motion.img
          variants={fadeIn("right", "spring", 0.8, 0.75)}
          initial="hidden"
          whileInView="show"
          src={Img2}
          alt=""
        />
        <motion.img
          variants={fadeIn("right", "spring", 1.2, 0.75)}
          initial="hidden"
          whileInView="show"
          src={Img3}
          alt=""
        />
        <motion.img
          variants={fadeIn("right", "spring", 1.6, 0.75)}
          initial="hidden"
          whileInView="show"
          src={Img4}
          alt=""
        />
      </div>

      <div className="right-part">
        <span>Some Reasons</span>

        <div>
          <motion.span
            variants={fadeIn("right", "spring", 0.4, 0.75)}
            initial="hidden"
            whileInView="show"
            className="stroke-text"
          >
            Why
          </motion.span>
          <motion.span
            variants={fadeIn("right", "spring", 0.8, 0.75)}
            initial="hidden"
            whileInView="show"
          >
            {" "}
            Choose
          </motion.span>
          <motion.span
            variants={fadeIn("right", "spring", 1.2, 0.75)}
            initial="hidden"
            whileInView="show"
          >
            {" "}
            us
          </motion.span>
          <motion.span
            variants={fadeIn("right", "spring", 1.6, 0.75)}
            initial="hidden"
            whileInView="show"
          >
            {" "}
            ?
          </motion.span>
        </div>

        <div className="details-right">
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ EXERT COACHS</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THEN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nd} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
