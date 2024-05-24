import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/assents/photo/Logo.svg"

const Navbar = () => {
  return (
    <div>
      {/* <h2>Navbar</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link> */}

      <header className="header">
        <div className="container header-container">
          <Link className="header-logo link" href="/">
            <Image className="header-logo-icon" alt="logo" width={140} height={28} src={Logo} />
          </Link>
          <nav className="header-nav">
            <ul className="header-menu-list list">
              <li className="header-menu-item">
                <Link className="header-menu-link link" href="/">
                  Home
                </Link>
              </li>
              <li className="header-menu-item">
                <Link className="header-menu-link link" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="header-menu-item">
                <Link className="header-menu-link link" href="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="header-menu-item">
                <Link className="header-menu-link link" href="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <button className="header-button" type="submit">
            Subscribe
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
