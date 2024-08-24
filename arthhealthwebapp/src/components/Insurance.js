import React from 'react';
import './Insurance.css';
import { Link } from 'react-router-dom';

const Insurance = () => {
    return (
        <div id="insurance" className="container insurance-container">
            <div className="insurance-content">
                <div className="insurance-section">
                    <div className="insurance-circle">
                        <span>1</span>
                    </div>
                    <div className="insurance-text">
                        <h2>Insurance Verification</h2>
                        <p>
                            Ensuring that your insurance is verified and accepted before starting your therapy is essential to a smooth process. Our team can assist you with understanding what is covered under your insurance plan.
                        </p>
                        <Link to="/add-details-here" className="details-link">
                            ADD DETAILS HERE
                        </Link>
                    </div>
                </div>

                <div className="insurance-section">
                    <div className="insurance-circle">
                        <span>2</span>
                    </div>
                    <div className="insurance-text">
                        <h2>In-Network Insurance</h2>
                        <p>
                            We are proud to be in-network with many insurance providers to ensure that you get the care you need at a cost that is manageable.
                        </p>
                        <Link to="/add-details-here" className="details-link">
                            ADD DETAILS HERE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insurance;
