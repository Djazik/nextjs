import About from "./about/page";
import Image from "next/image";
import icon from "@/assents/photo/Icon.svg";
import Icon1 from "@/assents/photo/Icon (1).svg";
import Icon2 from "@/assents/photo/icon (2).svg";
import Icon3 from "@/assents/photo/icon (3).svg";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-container">
          <p className="hero-subtitle">
            Posted on <span className="hero-subtitle-span">startup</span>
          </p>
          <h1 className="hero-title">
            Step-by-step guide to choosing great font pairs
          </h1>
          <div className="hero-text-wrap">
            <p className="hero-text">
              By <span className="hero-text-span">James West</span> | May 23,
              2022
            </p>
            <p className="hero-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <button
            className="hero-button"
            type="button"
            aria-label="Read more about choosing great font pairs"
          >
            Read More &gt;
          </button>
        </div>
      </section>
      <About />

      <section className="category">
        <div className="container category-container">
          <h2 className="category-title">Choose A Category</h2>
          <ul className="category-list list">
            <li className="category-item">
              <div className="category-link link">
                <Image alt="Business Icon" src={icon} width={48} height={48} />
                <h3 className="category-subtitle">Business</h3>
                <p className="category-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="category-item">
              <div className="category-link link">
                <Image alt="Startup Icon" src={Icon1} width={50} height={50} />
                <h3 className="category-subtitle">Startup</h3>
                <p className="category-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="category-item">
              <div className="category-link link">
                <Image alt="Economy Icon" src={Icon2} width={50} height={50} />
                <h3 className="category-subtitle">Economy</h3>
                <p className="category-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
            <li className="category-item">
              <div className="category-link link">
                <Image alt="Economy Icon" src={Icon3} width={50} height={50} />
                <h3 className="category-subtitle">Technology</h3>
                <p className="category-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

     
    </main>
  );
}
