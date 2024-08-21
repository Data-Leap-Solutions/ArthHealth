import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; // Make sure to install this package
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import './Home.css'; // Import your CSS file
import Contact from './Contact';

const Home = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 3500); // Matches the typing animation duration

        return () => clearTimeout(timer);
    }, []);

    const services = [
        { name: "Physical Therapy", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/physical-therapy" },
        { name: "Balance & Gait Rehabilitation", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/balance-and-gait-rehabilitation" },
        { name: "Workers Compensation", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/workers-compensation" },
        { name: "Manual Therapy", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/manual-therapy" },
        { name: "Sports Rehabilitation", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/sports-rehabilitation" },
        { name: "TMJ Rehabilitation", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/tmj-rehabilitation" },
        { name: "Vestibular Rehabilitation", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/vestibular-rehabilitation" },
        //{ name: "Virtual Physical Therapy", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/virtual-physical-therapy" },
        { name: "Complimentary Screenings", imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220", description: "Comprehensive physical therapy to restore function.", url: "/services/complimentary-screening" }
    ];

    const testimonials = [
        {
            name: "John Doe",
            title: "Founder of Nothing",
            imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220",
            quote: "I love Arth Physical because I can ensure my fitness is youth. I can kind of get into a headspace where I'm going to have to deal with it and then I can set everything up and let it go."
        },
        {
            name: "Jane Smith",
            title: "CEO of Something",
            imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220",
            quote: "Arth Physical Therapy has been a game changer for me. The personalized care and attention to detail are unmatched."
        },
    ];

    return (
        <>
            <div id="banner" className="container-fluid">
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="landingpagetitle">
                            <h1>Rebuild.Restore.Revive</h1>
                        </div>
                        <div className="landingpagelinks">
                            <a href="/book-appointment" className={`appointmentbutton ${showButton ? 'show' : ''}`}>Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services" className="container">
                <h2>Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link to={service.url} className="service-item" key={index}>
                            <img src={service.imageUrl} alt={service.name} />
                            <div className="service-label">{service.name}</div>
                            <div className="service-info">
                                <p className="service-description">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div id="booking" className="container">
                <div className="booking-content">
                    <div className="booking-title">
                        <h1>Welcome to your<br />Journey of recovery</h1>
                        <p>Explore our services and schedule an appointment that best fits your needs.</p>
                    </div>
                    <div className="booking-links">
                        <ul>
                            <li><Link to="/book-appointment">Request an Appointment</Link></li>
                            <li><Link to="/services/complimentary-screening">Complementary Screening</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="discover-section">
                    <div className="discover-image">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=220" alt="Wellness World" />
                    </div>
                    <div className="discover-text">
                        <h2>Discover our wellness world</h2>
                        <p>Unveil the essence of what drives us - our purpose, our journey, and our vision. Embrace the power of transformation as you embark on a path to a healthier, more radiant you.</p>
                        <Link className="learn-more-button">Coming Soon</Link>
                    </div>
                </div>
            </div>
            <div id="testimonials" className="container">
                <h2 className="section-heading">Testimonials</h2>
                <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={5000}>
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial" key={index}>
                            <div className="testimonial-image">
                                <img src={testimonial.imageUrl} alt={testimonial.name} />
                            </div>
                            <div className="testimonial-content">
                                <h2>{testimonial.quote}</h2>
                                <p className="testimonial-author">{testimonial.name}</p>
                                <p className="testimonial-title">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <Contact />
        </>
    );
};

export default Home;
