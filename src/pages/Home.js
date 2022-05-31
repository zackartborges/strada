import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import Header from "../components/Header";
import Works from "../components/Works";
import Footer from "../components/Footer";

function Home() {
  const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

  useEffect(() => {
    const headerAnim = document.querySelector(".header-anim");
    const heroTitle = document.querySelectorAll(".hero-title");

    setTimeout(() => {
      headerAnim.classList.add("header-anim-on");
    }, 1000);

    setTimeout(() => {
      heroTitle.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("hero-title-on");
        }, 200 * index);
      });
    }, 1500);
  }, []);

  const onScrollBottomAnim = () => {
    const animBot = document.querySelectorAll(".anim-bot");

    animBot.forEach((item) => {
      let itemPosition = item.getBoundingClientRect();

      if (
        itemPosition.top >= 0 &&
        itemPosition.top <= window.innerHeight - 250
      ) {
        item.classList.add("item-anim-bot");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollBottomAnim);
    return () => window.removeEventListener("scroll", onScrollBottomAnim);
  }, []);

  return (
    <div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        exit={{ x: 0 }}
        transition={LoadingTransition}
        className="page-trans"
      ></motion.div>
      <Header />
      <Hero background={"/assets/images/biggie.jpg"}>
        <h6 className="sub-title hero-title">Welcome</h6>
        <h1 className="big-title hero-title">Daughters of Paint</h1>
      </Hero>
      <Works />
      <Footer />
    </div>
  );
}

export default Home;
