import React from 'react';
import './VestibularRehabilitation.css';
import { Link } from 'react-router-dom';

const VestibularRehabilitation = () => {
    return (
        <div id="vestibular-rehabilitation" className="container vestibular-rehabilitation-container">
            <div className="vestibular-rehabilitation-content">
                <div className="vestibular-rehabilitation-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirnphxFC6k5eEPi9iNqXrRt95PtdTFquYP8Yyv96cRjq4Gl9KDcc6kBiLhKHwTSM0HvA&usqp=CAU" alt="Vestibular Rehabilitation" />
                </div>
                <div className="vestibular-rehabilitation-text">
                    <h2>Vestibular Rehabilitation</h2>
                    <p>
                        Vestibular rehabilitation therapy (VRT) is a specialized form of therapy aimed at alleviating the symptoms of vestibular disorders, such as dizziness, vertigo, imbalance, and vision problems. These conditions are often caused by problems in the inner ear.
                    </p>
                    <p>
                        Our therapists perform comprehensive evaluations to determine the cause of your balance issues and develop individualized treatment plans designed to reduce dizziness, improve balance, and enhance overall mobility. VRT includes specific exercises that target the brain's ability to adapt and compensate for the inner ear's deficits.
                    </p>
                    <p>
                        Whether you're dealing with vestibular issues due to injury, illness, or aging, our experienced therapists will guide you through targeted exercises and strategies to regain control over your balance and reduce symptoms of dizziness.
                    </p>
                    <p>
                        Don't let vestibular disorders hold you back. Contact us today to schedule an appointment and start your journey toward better balance and reduced dizziness.
                    </p>
                    <Link to="/book-appointment" className="schedule-button">
                        Schedule Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VestibularRehabilitation;
