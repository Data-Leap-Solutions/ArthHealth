import React from 'react';
import './SportsRehabilitation.css';

const SportsRehabilitation = () => {
    return (
        <div id="sports-rehabilitation-container" className="container">
            <div className="sports-rehabilitation-content">
                <div className="sports-rehabilitation-image">
                    <img src="https://www.thephysicaltherapyadvisor.com/wp-content/uploads/2021/09/PTWithAthlete.jpg" alt="Sports Rehabilitation" />
                </div>
                <div className="sports-rehabilitation-text">
                    <h2>Sports Rehabilitation</h2>
                    <p>
                        Sports and recreational activities are exhilarating, but they can also lead to injuries that require specialized care. At Arth Physical Therapy, our Sports Rehabilitation program is designed to help athletes of all ages recover from injuries, regain their strength, and return to their peak performance levels.
                    </p>
                    <ul>
                        <li>Youth sports leagues</li>
                        <li>Adult recreational leagues</li>
                        <li>Soccer teams</li>
                        <li>Football teams</li>
                        <li>Baseball teams</li>
                        <li>Rugby teams</li>
                        <li>Lacrosse teams</li>
                        <li>Gyms and fitness studios</li>
                        <li>And more</li>
                    </ul>
                    <p>
                        Our licensed physical therapists and certified athletic trainers work with you to assess your injury, develop a personalized rehabilitation plan, and guide you through the recovery process. Take control of your recovery and return to the field, court, or gym stronger than ever.
                    </p>
                    <a href="/schedule" className="schedule-button">Schedule Now</a>
                </div>
            </div>
        </div>
    );
};

export default SportsRehabilitation;
