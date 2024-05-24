import React from "react";
import Image from "next/image";
import ras from "@/assents/photo/image.jpg"
import ras1 from "@/assents/photo/image (1).jpg"

const AboutUs = () => {
  return (
    <div className="container aboutus">
      <div className="our">
        <div className="out__texts">
          <h2>mision</h2>
          <h3>Creating valuable content for creatives all around the world</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="out__texts">
          <h2>Our Vision</h2>
          <h3>A platform that empowers individuals to improve</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>

      <div className="team">
        <div className="team__texts">
          <h2>Our team of creatives</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="out__textss">
        <Image src={ras} width={400} height={400} alt="bus" />

        </div>
      </div>

      <div className="team">

      <div className="out__textss">
        <Image src={ras1} width={400} height={400} alt="bus" />

        </div>
        <div className="team__texts">
          <h2>Why we started this Blog</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
