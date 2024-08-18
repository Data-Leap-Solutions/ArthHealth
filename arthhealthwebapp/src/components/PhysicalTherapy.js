import React, { useState } from 'react';
import './PhysicalTherapy.css';

const PhysicalTherapy = () => {
    return (
        <div id="physical-therapy-services" className="container">
            <div className="intro">
                <h1>Our Services</h1>
                <div className="divider"></div>
            </div>
            <div className="services-list">
                <div className="service-item">
                    <h2>Physical Therapy Evaluation</h2>
                    <p>
                        60-75 minute session that covers the history of your injury,
                        testing of the surrounding structures to determine what is at fault,
                        formation of a comprehensive and specific plan, initial intervention
                        with manual techniques and foundational corrective exercises to begin
                        the healing process and formation of Home Exercise Program (HEP) for
                        client to do on non-therapy days.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Physical Therapy Treatment Session</h2>
                    <p>
                        45-60 minute session of manual therapy, evidence-based modalities and
                        exercises specifically designed for you and your unique injury.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Injury Prevention Session</h2>
                    <p>
                        This type of session consists of corrective movements and training in
                        order to address deficits that could lead to injury. Manual therapy
                        and exercise will be used in conjunction to address the underlying
                        issues that could put you at risk for future injury.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Recovery Sessions</h2>
                    <p>
                        Individual or grouped services targeted at promoting recovery in the
                        active individual. The main goal of these sessions is to help mitigate
                        the wear and tear of weekly activity that leads to soreness, stiffness
                        and fatigue.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Performance Training Session</h2>
                    <p>
                        This type of session consists of advanced movement and technique training in the fields of balance, power, agility, speed, coordination and sport/activity specific tasks in order to strengthen any weak links in the chain and create a well-rounded performer. These sessions are designed to improve you beyond your baseline abilities whether you are a professional athlete or a 90-year-old grandmother who wants to pick up her grandchildren with greater ease.
                    </p>
                </div>
            </div>

            {/* Accordion Section */}
            <div className="accordion">
                <AccordionItem title="Conditions Treated">
                    <div className="accordion-content-grid">
                        <ul>
                            <li>Headaches</li>
                            <li>Nerve Entrapment</li>
                            <li>Muscle Soreness</li>
                            <li>Radiculopathy</li>
                            <li>Pelvic Dysfunctions</li>
                        </ul>
                        <ul>
                            <li>Back Pain</li>
                            <li>Muscle Strain</li>
                            <li>Arthritis</li>
                            <li>Bursitis</li>
                        </ul>
                        <ul>
                            <li>Neck Pain</li>
                            <li>Muscle Tightness</li>
                            <li>Fractures</li>
                            <li>Joint Replacements</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem title="Shoulder">
                    <div className="accordion-content-grid">
                        <ul>
                            <li>Shoulder Pain</li>
                            <li>Shoulder Instability</li>
                            <li>Frozen Shoulder</li>
                        </ul>
                        <ul>
                            <li>Rotator Cuff Injury</li>
                            <li>Shoulder Impingement</li>
                            <li>Biceps Tendonitis</li>
                        </ul>
                        <ul>
                            <li>AC Joint Separation</li>
                            <li>Shoulder Labral Tear</li>
                            <li>Thoracic Outlet Syndrome</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem title="Elbow/Wrist/Hand">
                    <div className="accordion-content-grid">
                        <ul>
                            <li>Tennis Elbow (Lateral Epicondylitis)</li>
                            <li>Wrist Sprain</li>
                            <li>Jersey Finger</li>
                        </ul>
                        <ul>
                            <li>Golfer's Elbow (Medial Epicondylitis)</li>
                            <li>Trigger Finger</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem title="Hip/Thigh">
                    <div className="accordion-content-grid">
                        <ul>
                            <li>Femoral Acetabular Impingement (FAI)</li>
                            <li>Piriformis Syndrome</li>
                            <li>Hip Instability</li>
                            <li>Hamstring Strain</li>
                        </ul>
                        <ul>
                            <li>Hip Labral Tear</li>
                            <li>Sciatica</li>
                            <li>Sacroiliac (SI) Joint Dysfunction</li>
                            <li>Quadriceps Strain</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem title="Knee">
                    <div className="accordion-content-grid">
                        <ul>
                            <li>ACL Sprain/Tear</li>
                            <li>MCL Sprain/Tear</li>
                            <li>Meniscus Tear</li>
                            <li>Patella Femoral Pain Syndrome (PFPS)/Jumper's Knee</li>
                        </ul>
                        <ul>
                            <li>PCL Sprain/Tear</li>
                            <li>LCL Sprain/Tear</li>
                            <li>Osgood Schlatter's</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem title="Lower Leg/Ankle/Foot">
                    <div className="accordion-content-grid">
                        <ul>
                            <li>Shin Splints</li>
                            <li>Ankle Sprains</li>
                            <li>Plantar Fasciitis</li>
                            <li>Chronic Ankle Instability</li>
                        </ul>
                        <ul>
                            <li>Anterior Compartment Syndrome</li>
                            <li>Achilles Tendonitis</li>
                            <li>Turf Toe</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem title="Neurological Conditions">
                    <div className="accordion-content-grid">
                        <ul>
                            <li>Stroke</li>
                            <li>Parkinson's</li>
                        </ul>
                    </div>
                </AccordionItem>
            </div>
        </div>
    );
}

// Functional Component for Accordion Item
function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}

export default PhysicalTherapy;
