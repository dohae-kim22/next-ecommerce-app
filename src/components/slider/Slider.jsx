"use client";

import React, { useEffect, useState } from "react";
import SliderData from "./SliderData";
import styles from "./Slider.module.scss";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("left");
  const sliderLength = SliderData.length;
  const intervalTime = 5000;

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev === sliderLength - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev === 0 ? sliderLength - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentSlide((prev) => (prev === sliderLength - 1 ? 0 : prev + 1));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.slider}>
      <FaRegArrowAltCircleLeft
        onClick={prevSlide}
        className={`${styles.arrow} ${styles.prev}`}
      />
      <FaRegArrowAltCircleRight
        onClick={nextSlide}
        className={`${styles.arrow} ${styles.next}`}
      />

      {SliderData.map((slide, index) => {
        const { id, image, title } = slide;

        return (
          <div
            key={id}
            className={`${styles.slide} ${
              index === currentSlide
                ? `${styles.current} ${styles[direction]}`
                : ""
            }`}
          >
            {index === currentSlide && <Image src={image} alt={title} fill />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
