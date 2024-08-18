import React from 'react';
import './BalanceGaitRehabilitation.css';
import { Link } from 'react-router-dom';

const BalanceGaitRehabilitation = () => {
    return (
        <div id="balance-gait-rehabilitation" className="container balance-gait-container">
            <div className="balance-gait-content">
                <div className="balance-gait-image">
                    <img 
                        src="https://static.wixstatic.com/media/19a75a_b20447f1a4d84b608fc1a519ce27388c~mv2.jpg/v1/fill/w_1470,h_1455,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/19a75a_b20447f1a4d84b608fc1a519ce27388c~mv2.jpg" 
                        alt="Balance and Gait Rehabilitation" 
                    />
                </div>
                <div className="balance-gait-text">
                    <h2>Balance and Gait Rehabilitation</h2>
                    <p>
                        Balance and gait rehabilitation in physical therapy is a specialized program designed to address challenges related to balance, walking, and overall mobility. Whether due to injury, neurological conditions, aging, or other factors, individuals may experience difficulties in maintaining stability and fluidity of movement.
                    </p>
                    <p>
                        Our therapists will conduct thorough assessments to identify areas of impairment and design personalized exercise programs and functional activities to target these issues directly. This can include exercises to strengthen muscles essential for balance, improve coordination, and enhance proprioception.
                    </p>
                    <p>
                        Gait training and rehabilitation focuses on refining walking patterns, stride length, and posture to optimize mobility and reduce the risk of falls.
                    </p>
                    <p>
                        Throughout the rehabilitation process, therapists will closely monitor progress and make adjustments to the program as needed. The ultimate goal is to help individuals regain confidence in their ability to move safely and independently in their daily lives. By addressing underlying impairments and providing targeted interventions, balance and gait rehab empowers individuals to achieve greater mobility and quality of life.
                    </p>
                    <Link to="/book-appointment" className="schedule-button">
                        Schedule Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BalanceGaitRehabilitation;
