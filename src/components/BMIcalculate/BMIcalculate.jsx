import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { fadeIn } from "../../assets/utils/motion";
import "./BMIcalculate.css";
const BMIcalculate = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [BMI, setBMI] = useState("");
  const [message, setmessage] = useState("");

  let calcBMI = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0 || height.value==0) {
      setmessage("please enter a valid weight and height");
    } else {
      let BMI = (weight/Math.pow(height/100,2)).toFixed(2)
      console.log(Math.pow(height,2),weight,BMI)

      if (BMI < 18.5) {
        setmessage(`Your BMI is ${BMI} and you are skinny `);
      } else if (BMI < 25) {
        setmessage(`Your BMI is ${BMI} and you are healthy  `);
      } else if (BMI < 40) {
        setmessage(`Your BMI is ${BMI} and you are overweight  `);
      } else {
        setmessage(`Your BMI is ${BMI} and you are Obese  `);
      }
    }

    // setTimeout(()=>{
    //   setmessage(``);
    // },5000)
  };

  const form = useRef();

  return (
    <div className="ibm-container">
      <div className="headers">
        <motion.span
          variants={fadeIn("right", "spring", 0.3, 0.7)}
          initial="hidden"
          whileInView="show"
          className="stroke-text"
        >
          Calculate
        </motion.span>
        <motion.span
          variants={fadeIn("right", "spring", 0.6, 0.7)}
          initial="hidden"
          whileInView="show"
        >
          Your
        </motion.span>
        <motion.span
          variants={fadeIn("right", "spring", 0.9, 0.7)}
          initial="hidden"
          whileInView="show"
          className="stroke-text"
        >
          BMI
        </motion.span>
      </div>

      <form
        ref={form}
        onSubmit={calcBMI}
        onClick={calcBMI}
        className="calculate-section"
        id="calculate-form"
      >
        <div className="">
          <input
            className="calculate-input"
            type="text"
            placeholder="  Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label className="anotation"> cm</label>
        </div>
        <div>
          <input
            className="calculate-input"
            type="text"
            placeholder="  Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label className="anotation"> kg</label>
        </div>
        <button className="btn btn-join" type="submit">
          Calculate Now
        </button>
        <div className="message">
          <p placeholder="result">{message}</p>
        </div>
      </form>
    </div>
  );
};

export default BMIcalculate;
