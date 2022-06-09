import React from 'react'
import Navigation from '../Navigation/Navigation';
import Carousel from 'react-bootstrap/Carousel';
import HeaderImage from "../../assets/images/10thGenWinterFlagpoles.jpg";
import WorkshopImage from "../../assets/images/9thGenAuditionWorkshop.PNG";
import AuditionsImage from "../../assets/images/Auditions.PNG";
import InterviewsImage from "../../assets/images/10thGenPreviewNight.jpg";
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
                        Unique Representation of Movement (URMO) is a family dedicated to growth<br></br>
                        and individual expression through movement. Our goal is to uphold the <br></br>
                        history of dance culture and our team’s passion for artistry in an inclusive<br></br> 
                        space to foster the purest representation of ourselves.
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
                            <img className="column-img" src={WorkshopImage} alt="9th Gen Audition Workshop #1"/>
                            <div className='description'>
                                Workshops are held during Week 7 of Fall Quarter and  
                                taught by our three coordinators. Workshop location
                                is usually at the ARC Outdoor basketball 
                                courts, but will be TBD. These workshops are free!
                            </div>
                        </div>
                        <div className='column'>
                            Audition Day
                            <img className="column-img" src={AuditionsImage} alt="9th Gen Audition Workshop #1"/>
                            <div className='description'>
                                Auditions will be held the Thursday of Week 7 at
                                Student Center Terrace. After turning in your audition 
                                application and audition fee, we will ask auditonees 
                                to perform the three audition pieces in groups of threes 
                                onstage in front of our judging panel. After all the rounds 
                                are complete, we will hold callbacks for certain groups. 
                                Afterwards, there will be an informal and optional cypher 
                                for auditonees to freestyle and show us any other tricks they may have! 
                            </div>
                        </div>
                        <div className='column'>
                            Interview
                            <img className="column-img" src={InterviewsImage} alt="9th Gen Audition Workshop #1"/>
                            <div className="description">
                                Once auditions are over, board will deliberate and reach out to auditionees
                                to move on to the interview round through phone call or text. URMO board will 
                                let you know the time and location of your interview. Once all interviews have
                                been conducted, the roster should be released by late Saturday afternoon!
                            </div>
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
