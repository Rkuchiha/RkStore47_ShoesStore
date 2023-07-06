import React from "react";
import './App.css'
import BMIcalculate from "./components/BMIcalculate/BMIcalculate";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Program/Programs";
import Reasons from "./components/Reasons/Reasons"
import Testimonials from "./components/Testimonials/Testimonials";


const App = () => {
  return (
    <div className="App">
      <Hero />
      <BMIcalculate/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
};

export default App;
