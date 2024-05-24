import React from "react";
import Image from "next/image";
import bus from "@/assents/photo/busines.jpg";

const Blog = () => {
  return (
    <div>
      <section className="business container">
        <div className="business__wrapper">
          <h2>Business</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <h4>Blog Business</h4>
        </div>
      </section>

      <section className="container">
        <div className="bus__search">
          <h2>Searching...</h2>
        </div>

        <div className=" bus__cartt">
        <div className="bus__cart-wrapper">
          <div className="bus__img">
            <Image src={bus} width={300} height={200} alt="bus" />
          </div>
          <div className="bus__item">
            <h3>Business</h3>
            <h2>Top 6 free website mockup tools 2022</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>

        <div className="bus__cart-wrapper">
          <div className="bus__img">
            <Image src={bus} width={300} height={200} alt="bus" />
          </div>
          <div className="bus__item">
            <h3>Business</h3>
            <h2>Top 6 free website mockup tools 2022</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>

        <div className="bus__cart-wrapper">
          <div className="bus__img">
            <Image src={bus} width={300} height={200} alt="bus" />
          </div>
          <div className="bus__item">
            <h3>Business</h3>
            <h2>Top 6 free website mockup tools 2022</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>

        <div className="bus__cart-wrapper">
          <div className="bus__img">
            <Image src={bus} width={300} height={200} alt="bus" />
          </div>
          <div className="bus__item">
            <h3>Business</h3>
            <h2>Top 6 free website mockup tools 2022</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>

        <div className="bus__cart-wrapper">
          <div className="bus__img">
            <Image src={bus} width={300} height={200} alt="bus" />
          </div>
          <div className="bus__item">
            <h3>Business</h3>
            <h2>Top 6 free website mockup tools 2022</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>

        <div className="bus__cart-wrapper">
          <div className="bus__img">
            <Image src={bus} width={300} height={200} alt="bus" />
          </div>
          <div className="bus__item">
            <h3>Business</h3>
            <h2>Top 6 free website mockup tools 2022</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </div>  
        </div>
      </section>
    </div>
  );
};

export default Blog;
