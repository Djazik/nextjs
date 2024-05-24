import React from 'react'
import face from "@/assents/photo/face.svg"
import twi from "@/assents/photo/twi.svg"
import ins from "@/assents/photo/ins.svg"
import linkd from "@/assents/photo/in.svg"
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
         <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div >
            <div className="footer-logo link">
              <svg className="footer-logo-icon" width="140" height="28">
                <use href="./images/icons.svg#icon-Logo"></use>
              </svg>
            </div>
          </div>
          <nav className="footer-nav">
            <ul className="footer-menu-list list">
              <li className="footer-menu-item">
                <div >
                  <div className="footer-menu-link link">Home</div>
                </div>
              </li>
              <li className="footer-menu-item">
                <div>
                  <div className="footer-menu-link link">Blog</div>
                </div>
              </li>
              <li className="footer-menu-item">
                <div>
                  <div className="footer-menu-link link">About Us</div>
                </div>
              </li>
              <li className="footer-menu-item">
                <div>
                  <div className="footer-menu-link link">Contact us</div>
                </div>
              </li>
              <li className="footer-menu-item">
                <div>
                  <div className="footer-menu-link link">Privacy Policy</div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-form">
          <h2 className="footer-form-title">
            Subscribe to our news letter to get latest updates and news
          </h2>
          <form className="form" name="subscribe">
            <label className="form-label">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
            </label>
            <button className="form-button" type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-contacts">
          <div className="footer-contacts-wrap">
            <p className="footer-contacts-text">Finstreet 118 2561 Fintown</p>
            <p className="footer-contacts-text">Hello@finsweet.com 020 7993 2905</p>
          </div>
          <ul className="footer-soc-list list">
            <li className="footer-soc-item">
              <div className="footer-soc-link link" >
                <div className="footer-soc-icon" width="16" height="16">
                  <Image src={face} />
                </div>
              </div>
            </li>
            <li className="footer-soc-item">
              <div className="footer-soc-link link" >
                <div className="footer-soc-icon" width="16" height="16">
                <Image src={twi} />

                </div>
              </div>
            </li>
            <li className="footer-soc-item">
              <div className="footer-soc-link link" >
                <div className="footer-soc-icon" width="16" height="16">
                <Image src={ins} />
                </div>
              </div>
            </li>
            <li className="footer-soc-item">
              <div className="footer-soc-link link" >
                <div className="footer-soc-icon" width="16" height="16">
                <Image src={linkd} />

                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer