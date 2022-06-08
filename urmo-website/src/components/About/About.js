import React from 'react'
import Navigation from '../Navigation/Navigation';
import Carousel from 'react-bootstrap/Carousel';
import HeaderImage from "../../assets/images/10thGenWinterFlagpoles.jpg";
import '../../assets/css/About/About.css';

export default function About() {
  return (
    <div>
        <Navigation/>
        <div className="about-container">
            <div className="about-header">
                <div className='header-title'>
                    <h1>About <br/> Us</h1>
                </div>
                <div className='header-img'>
                    <img id="header-img" src={HeaderImage} alt="Team Break"/>
                </div>
            </div>

            <div className="about-content">
                <section id="mission">
                    <h3 className='section-title'>Our Mission</h3>
                    <div className='mission-statement'>
                        Unique Representation of Movement (URMO) is a family dedicated to growth and individual expression through movement. Our goal is to uphold the history of dance culture and our team’s passion for artistry in an inclusive space to foster the purest representation of ourselves.
                    </div>
                </section>
                <section id="performances">
                    <h3 className='section-title'>Our Performances</h3>
                    <Carousel>
                        <Carousel.Item className="slide">
                            <iframe 
                                 width="900" 
                                 height="500"  
                                src="https://www.youtube.com/embed/d9EUK4jKMMg" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </Carousel.Item>
                        <Carousel.Item className="slide">
                            <iframe 
                                width="900" 
                                height="500" 
                                src="https://www.youtube.com/embed/lPqoLyb9NLk"                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </Carousel.Item>
                        <Carousel.Item className="slide">
                            <iframe 
                                width="900" 
                                height="500" 
                                src="https://www.youtube.com/embed/P38oIomSMKs"                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section id="audition">
                    <h3 className='section-title'>The Audition Process</h3>
                    <div className='audition-content'>
                        <div className='column'>
                            Audition Workshops
                        </div>
                        <div className='column'>
                            Audition Day
                        </div>
                        <div className='column'>
                            Interview
                            Workshops will 
                        </div>
                    </div>
                </section>
                <section id="expectations">
                    <h3 className='section-title'>Team Member Expectations</h3>
                </section>
            </div>
        </div>
    </div>
  )
}
