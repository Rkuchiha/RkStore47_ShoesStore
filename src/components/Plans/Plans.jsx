import React from "react";
import "./plans.css";
import { plansData, Plansdata } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";
const Plans = () => {
  return (
    <div className="plans-container" id="Plans">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>

      <div className="programs-header">
        <motion.span
          variants={fadeIn("right", "spring", 0.3, 0.75)}
          initial="hidden"
          whileInView="show"
          className="stroke-text"
        >
          READY TO START
        </motion.span>
        <motion.span
          variants={fadeIn("right", "spring", 0.6, 0.75)}
          initial="hidden"
          whileInView="show"
        >
          YOUR JOURNEY
        </motion.span>
        <motion.span
          variants={fadeIn("right", "spring", 0.9, 0.75)}
          initial="hidden"
          whileInView="show"
          className="stroke-text"
        >
          NOW WITH US
        </motion.span>
      </div>

      <div className="plans-card">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benifites =></span>
            </div>
            <button className="btn">JOIN NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
