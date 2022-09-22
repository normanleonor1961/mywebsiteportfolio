import React from "react";
import Typewriter from "typewriter-effect";
import { Animate } from "react-simple-animate";
import "./home.scss";
import MyCv from "./norman_cv.pdf";

const Homes = () => {
  return (
    <div
      className="container-fluid sidebar-section home-section home"
      id="home"
    >
      <div className="container home-content">
        <div className="bk-picture">
          <h1>I am a</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Web Developer",
                  "React JS Developer",
                  "Wordpress Developer",
                  "Laravel Developer",
                ],

                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateY(600px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <div className="button-for-action py-5">
              <div className="hire-me-button">Hire me</div>

              <div className="get-resume-button">
                <a href={MyCv} download="Norman_cv.pdf">
                  Get Resume
                </a>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default Homes;
