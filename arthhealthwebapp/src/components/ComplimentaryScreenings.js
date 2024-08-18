import React from 'react';
import './ComplimentaryScreenings.css';
import { Link } from 'react-router-dom';

const ComplimentaryScreenings = () => {
    return (
        <div id="complimentary-screenings-container" className="container">
            <div className="complimentary-screenings-content">
                <div className="complimentary-screenings-image">
                    <img 
                        src="https://www.ivyrehab.com/wp-content/uploads/2020/09/AdobeStock_244741236-scaled-e1600983701453.jpeg" 
                        alt="Complimentary Screening" 
                    />
                </div>
                <div className="complimentary-screenings-text">
                    <h2>Complimentary Screenings</h2>
                    <p>
                        If you're dealing with pain, have recently suffered an injury, or suspect something might be wrong, come to Arth Physical Therapy for a complimentary screening. You'll have a one-on-one session with one of our skilled physical therapists who will perform a comprehensive assessment of your condition.
                    </p>
                    <ul>
                        <li>Identify the root cause of your discomfort or injury</li>
                        <li>Develop a personalized treatment plan that suits your specific needs</li>
                        <li>Understand the next steps to take on your recovery journey</li>
                    </ul>
                    <p>
                        Don't let pain or discomfort linger—schedule your complimentary injury screening today. Whether it's a sprain, strain, fracture, or persistent pain, we're here to help you find relief. Instead of relying on internet research or attempting to self-diagnose, speak with a licensed physical therapist who can provide clarity on your condition and guide you toward the best course of action.
                    </p>
                    <p className="disclaimer">
                        *Please note: Beneficiaries of federal health care programs are not eligible to participate in free screenings. Complimentary screenings are available only at participating locations.
                    </p>
                    <Link to="/book-appointment" className="schedule-button">
                        Schedule Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ComplimentaryScreenings;
