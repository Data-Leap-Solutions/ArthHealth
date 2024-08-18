import React from 'react';
import './ManualTherapy.css';
import { Link } from 'react-router-dom';

const ManualTherapy = () => {
    return (
        <div id="manual-therapy" className="container manual-therapy-container">
            <div className="manual-therapy-content">
                <div className="manual-therapy-image">
                    <img src="https://www.ewmotiontherapy.com/hubfs/Learning%20Center%20Photos/blog10%20%281%29.png" alt="Manual Therapy" />
                </div>
                <div className="manual-therapy-text">
                    <h2>Manual Therapy</h2>
                    <p>
                        Our manual therapy services provide targeted hands-on techniques performed by skilled therapists to address specific issues and support your healing journey. Our therapists are trained in a variety of certified techniques including:
                    </p>
                    <ul>
                        <li>Joint Mobilization Techniques</li>
                        <li>Kinesio Taping</li>
                        <li>Myofascial Release</li>
                        <li>IASTM/Graston Technique</li>
                        <li>Others</li>
                    </ul>
                    <p>
                        These hands-on treatments are designed to enhance range of motion, promote relaxation, alleviate pain, reduce swelling, and address mobility limitations. With advanced training and certifications, our therapists provide expert care tailored to your individual needs.
                    </p>
                    <Link to="/book-appointment" className="schedule-button">
                        Schedule Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManualTherapy;
