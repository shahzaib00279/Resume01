import React from 'react'
import ServiceCard from '../../components/cards/ServiceCard'
import Logo from '../../components/logo/Logo'
import TesttimonialsCard from '../../components/cards/TesttimonialsCard'
import {data, ClientLogo, testimonials} from '../../contants/About.Constants'


export default function About() {
  return (
    
      <article className="about  active" data-page="about">

        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I’m Shahzaib, a Web & Mobile Application Developer with expertise in designing, developing, and deploying scalable applications for web and mobile platforms. I specialize in front-end and full-stack development using technologies such as React, Vue, Node.js, and React Native
          </p>

          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I
            add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your
            message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </section>


        {/* <!--
          - service
        --> */}

        <section className="service">

          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            {
              data.map ((item, index )=> {
                return (
                  <ServiceCard 
                    key={index} 
                    image={item.image} 
                    title={item.title} 
                    description={item.description} />
                )
                
              })
            }

          </ul>

        </section>

{/* 
        <!--
          - testimonials
        --> */}

        <section className="testimonials">

          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            {
            testimonials.map((testimonial, index) => {
              return (
                <TesttimonialsCard 
                  key={index} 
                  project={testimonial.project} 
                  name={testimonial.name} 
                  text={testimonial.text} />
              )
            })}
        

          </ul>

        </section>


        {/* <!--
          - testimonials modal
        --> */}

        <div className="modal-container" data-modal-container>

          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">

            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
              </figure>

              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">

              <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

              <time datetime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>

          </section>

        </div>

        <section className="clients">

          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            {
              ClientLogo.map((logo, index) => {
                return (
                  <Logo key={index} logo={logo} />
                )
              })
            }

          </ul>

        </section>

      </article>
  )
}
