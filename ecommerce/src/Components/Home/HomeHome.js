import React from "react";
import Slider from "react-slick";
import logo1 from "./logo1.jpg";
import "./home.css";
import del from "./3.png";
import cust from "./cust.jpg";
import pack from "./pack.jpg";
import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";
import b4 from "./b4.jpg";
import { motion } from "framer-motion";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const HomeHome = () => {
  const style = { color: "white", fontSize: "3em", margin: "2rem" };
  var settings = {
    // pauseOnFocus: true,
    // dots: false,
    // prevArrow: false,
    // nextArrow: false ,

    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // speed: 500,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="banner">
        <img src={logo1} />
      </section>

      <section className="home_home">
        <div className="home_wellness">
          <div className="header-container">
            <h2>Unting Boundless Shoping Experiences </h2>
          </div>
          <div className="wellness">
            <Slider {...settings}>
              <div className="wellness_details">
                <h3>Shop Smarter, Live Better</h3>
              </div>
              <div className="wellness_details">
                <h3>Your Style, Your Store</h3>
              </div>
              <div className="wellness_details active-slide">
                <h3>Discover More, Shop Better</h3>
              </div>
              <div className="wellness_details">
                <h3>Where Trends Meet Convenience</h3>
              </div>
              <div className="wellness_details">
                <h3>Every Click, a Fashion Upgrade</h3>
              </div>
              <div className="wellness_details">
                <h3>Unbox Joy, Unwrap Savings</h3>
              </div>
              <div className="wellness_details">
                <h3>Unleash the Shopaholic in You</h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="home_services">
        <div className="header-container">
          <h2>Our Services</h2>
        </div>
        <div className="card_container">
          <div className="card">
            <img src={del} alt="Bottle" />
            <h3>Super FAST Delivery</h3>
            <h4>
              Swift Shipping, Seamless Shopping. Experience the thrill of
              super-fast delivery, bringing your favorites to your doorstep in
              record time
            </h4>
          </div>
          <div className="card">
            <img src={pack} alt="Bottle" />
            <h3>24x7 Service </h3>
            <h4>
              Own your Daily Hydration Routine with a Smart Bottle that keeps
              you hydrated every step of the way.
            </h4>
          </div>
          <div className="card">
            <img src={cust} alt="Bottle" />
            <h3>Secured Pakaging</h3>
            <h4>
              Empowering Wellness, One Click at a Time. Dive into a world of
              health and balance with our insightful blogs and workshops,
              designed for transformation at your own pace
            </h4>
          </div>
        </div>
      </section>
      <section className="display">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ delay: 0, duration: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="img"
          src={b1}
          alt="img"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ delay: 0, duration: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="img"
          src={b2}
          alt="img"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ delay: 0, duration: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="img"
          src={b3}
          alt="img"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          // animate={{opacity:1 , scale:1}}
          transition={{ delay: 0, duration: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="img"
          src={b4}
          alt="img"
        />
      </section>
      <section className="footer">
        <div className="footermain">
          <div className="left">
            <div className="heading">
              <h3> About Us</h3>
            </div>
            <div className="content">
              {" "}
              Welcome to Fusion – Where Style Meets Convenience! At Fusion, we
              believe that your shopping experience should be a seamless blend
              of trendsetting styles and unparalleled convenience. Established
              with a passion for fashion and a commitment to customer
              satisfaction, we are your ultimate destination for all things chic
              and contemporary.
            </div>
            <FaWhatsappSquare style={style} />
            <FaTwitterSquare style={style} />
            <FaInstagramSquare style={style} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHome;
