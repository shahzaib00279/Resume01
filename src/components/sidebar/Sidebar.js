import React from 'react'
import Logo from '../logo/Logo'
import profile from '../../assets/shahzzaib.jpg'
// import { FaPhoneAlt } from "react-icons/fa";



export default function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">

        
        <Logo logo={profile} />

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">Muhammad Shahzaib</h1>

          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">Muhammadshahzaib00279@gmail.com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">+92 3231070199</a>
              {/* <FaPhoneAlt /> */}

            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time datetime="1982-06-23">Jan 20, 1996</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Faisalabad, Punjab, Pakistan</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon className = "socials-icons" name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon className = "socials-icons" name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon className = "socials-icons" name="logo-instagram"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>
  )
}
