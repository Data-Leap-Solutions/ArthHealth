import React from 'react';
import './PatientInformation.css';

const PatientInformation = () => {
    return (
        <div id="patient-information-container" className="container">
            <div className="patient-information-content">
                <div className="patient-information-text">
                    <h2>Your Guide to Patient Information</h2>
                    <p>
                        We want your experience with us to be simple and convenient. Here are a few things to remember for your next visit to Arth Physical Therapy:
                    </p>
                    <ul>
                        <li>Please print, complete, and bring a copy of our required health forms.</li>
                        <li>Please bring your insurance card to your first appointment.</li>
                        <li>Our facility secretary will call for insurance approval.</li>
                        <li>We accept Workers' Compensation and most insurances.</li>
                        <li>Your therapist may request a prescription ordering therapy; please bring it to your first session.</li>
                        <li>Wear loose-fitting, comfortable clothing.</li>
                        <li>We do our best to accommodate your schedule. Saturday appointments are available now.</li>
                    </ul>
                    <a href="/Patient-Forms.pdf" target="_blank" rel="noopener noreferrer" className="view-forms-button">View Patient Forms</a>

                    <a href="/book-appointment" className="schedule-button">Schedule an Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default PatientInformation;
