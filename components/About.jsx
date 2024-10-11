import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to The Bison
              Our Story

              Nestled in the heart of Rajkot, The Bison is the culmination of a lifelong dream and a shared passion for exceptional dining. Established in 1995, our journey began with a simple desire—to create a haven where flavors dance, and every meal is a celebration.
              The Culinary Tapestry

              At The Bison, we view food as an art form. Our culinary artisans, under the guidance of Executive Chef john mark, embark on a daily quest for perfection. Each dish is a canvas, and every ingredient is a stroke of inspiration, resulting in a menu that tells a story of creativity and innovation.
              Beyond Plates: Our Philosophy
              Warmth & Hospitality
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
