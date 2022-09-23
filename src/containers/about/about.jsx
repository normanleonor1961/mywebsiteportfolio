import React from "react";
import "./about.scss";
import ProfilePic from "../../image/Bong.jpg";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
         */}
        <div className="col">
          <div className="about-image mx-5">
            <img src={ProfilePic} alt="fullface" />
          </div>
        </div>

        {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12"> */}
        <div className="col">
          <div className="about-details">
            <p className="py-3">
              My name is Norman Leonor and I am a tech-savvy, passionate about
              digital technology and aspires to become a Full-Stack Web
              Developer in the near future. He's perceived his passion in
              computer programming way back in the early 90's when he got
              employed in one of a local government unit in the Visayas Region
              and given the responsibility of maintaining the File Server
              stationed in the Mayor's office Electronics Data Processing
              Section and manages the overall operations of EDP section.
              Sometimes he will be required to make small modification of the
              code e.g. increasing the Mayor's Permit Taxes. Though with
              insufficient knowledge about programming and networking, he was
              able to accomplished his reports for the Executive Office thru his
              diligent research using only text books. That's jumstarted his
              passion in digital technologies. He has learned languages like C#,
              PHP, JavaScript and other framework technology like Wordpress and
              Laravel through self study.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
