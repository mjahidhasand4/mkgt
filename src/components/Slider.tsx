"use client";
import Slider from "react-slick";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const NextArrow = (props: ButtonProps) => {
  return (
    <button className="slick-arrow slick-next" {...props}>
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
        />
        <path
          fillRule="evenodd"
          d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
        />
      </svg>
    </button>
  );
};

const PrevArrow = (props: ButtonProps) => {
  return (
    <button className="slick-arrow slick-prev" {...props}>
      <svg
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="rotate-180"
      >
        <path
          fillRule="evenodd"
          d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
        />
        <path
          fillRule="evenodd"
          d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
        />
      </svg>
    </button>
  );
};

export const SlickSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="relative">
      <img
        src="https://mgkt.org.bd/wp-content/uploads/2024/02/Pic-12.png"
        alt=""
      />
      <img
        src="https://mgkt.org.bd/wp-content/uploads/2024/02/Pic-13.png"
        alt=""
      />
      <img
        src="https://mgkt.org.bd/wp-content/uploads/2024/02/Pic-11.png"
        alt=""
      />
    </Slider>
  );
};
