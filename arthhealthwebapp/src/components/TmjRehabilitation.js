import React from 'react';
import './TmjRehabilitation.css';
import { Link } from 'react-router-dom';

const TMJRehabilitation = () => {
    return (
        <div id="tmj-rehabilitation" className="container tmj-rehabilitation-container">
            <div className="tmj-rehabilitation-content">
                <div className="tmj-rehabilitation-image">
                    <img src="https://ptfairfield.com/wp-content/uploads/2022/03/physical-therapy-clinic-tmj-dysfunction-fairfield-universal-therapy-fairfield-ia.png.webp" alt="TMJ Rehabilitation" />
                </div>
                <div className="tmj-rehabilitation-text">
                    <h2>TMJ Rehabilitation</h2>
                    <p>
                        Our skilled team of physical therapists is dedicated to helping you find relief from jaw pain, clicking, and dysfunction associated with TMJ disorders.
                    </p>
                    <p>
                        Using a holistic approach, we address the underlying causes of TMJ dysfunction to alleviate pain and restore normal jaw function. Our personalized treatment plans may include manual therapy, therapeutic exercises, modalities, and patient education to promote healing and improve jaw mobility.
                    </p>
                    <p>
                        Whether you're experiencing jaw pain, difficulty chewing, or headaches related to TMJ issues, we're here to help. Our compassionate therapists will work closely with you to develop a tailored treatment plan that meets your unique needs and goals.
                    </p>
                    <p>
                        Don't let TMJ pain interfere with your daily life. Contact us today to schedule an appointment and take the first step toward a healthier, pain-free jaw.
                    </p>
                    <Link to="/book-appointment" className="schedule-button">
                        Schedule Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TMJRehabilitation;
