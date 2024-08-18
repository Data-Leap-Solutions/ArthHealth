import React from 'react';
import './WorkersCompensation.css';
import { Link } from 'react-router-dom';

const WorkersCompensation = () => {
    return (
        <div id="workers-compensation" className="container workers-compensation-container">
            <div className="workers-compensation-content">
                <div className="workers-compensation-image">
                    <img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_326,w_492,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_640/workers-compensation_ygqmkp.jpg" alt="Workers' Compensation Rehabilitation" />
                </div>
                <div className="workers-compensation-text">
                    <h2>Workers' Compensation</h2>
                    <p>
                        Welcome to Arth Physical Therapy, your trusted partner in recovery and rehabilitation for workers' compensation cases. We understand that workplace injuries can have a significant impact on your life, which is why our team is dedicated to providing exceptional care to help you recover and return to work safely.
                    </p>
                    <p>
                        Our experienced therapists utilize advanced techniques and personalized treatment plans to address a wide range of work-related injuries, from strains and sprains to post-surgical rehabilitation. We focus not only on alleviating pain and restoring function but also on empowering you with strategies for injury prevention and long-term wellness.
                    </p>
                    <p>
                        We collaborate closely with employers, insurers, and case managers to ensure seamless communication and effective coordination of care. Whether you need therapeutic exercises, manual therapy, ergonomic assessments, or educational resources, we are here to support you every step of the way.
                    </p>
                    <p>
                        Take the first step towards recovery with Arth Physical Therapy. Contact us today to schedule your appointment and experience the difference our specialized care can make in your rehabilitation journey.
                    </p>
                    <Link to="/book-appointment" className="schedule-button">
                        Schedule Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WorkersCompensation;
