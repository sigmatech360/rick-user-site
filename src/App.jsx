// src/App.js
import React, { useState } from "react";
import useFirebaseMessaging from "./useFirebaseMessaging";
import "bootstrap/dist/css/bootstrap.min.css";

import UserRouter from "./Routers/index";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaInstagram, FaLink } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./index.css";
import logo from "../src/Assets/images/logo.webp";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import { Link } from "react-router-dom";
import Home from "./Screens/Home";
// import {  SwiperSlide } from 'swiper/react';
// import  {  Autoplay } from 'swiper';

const App = () => {
  useFirebaseMessaging();
  

  return (
    <div>
      <UserRouter />
    </div>
  );
};

export default App;
