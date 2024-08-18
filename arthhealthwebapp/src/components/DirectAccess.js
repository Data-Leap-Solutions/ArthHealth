import React, { useState } from 'react';
import { Collapse, Card, CardBody, Button } from 'reactstrap';
import './DirectAccess.css'; // Add CSS styles for this component

const DirectAccess = () => {
    const [faqOpen, setFaqOpen] = useState([false, false, false, false, false, false, false]);

    const toggleFAQ = (index) => {
        const newFaqOpen = [...faqOpen];
        newFaqOpen[index] = !newFaqOpen[index];
        setFaqOpen(newFaqOpen);
    };

    return (
        <div id="direct-access-container" className="container">
            <div className="direct-access-content">
                <div className="direct-access-text">
                    <h2>Direct Access</h2>
                    <p>
                        Take control of your physical therapy journey with Arth Physical Therapy's Direct Access. You no longer need a prescription or referral to begin treatment, allowing you to start your healing faster, save money, and choose the treatment options that best suit your needs.
                    </p>
                    <p>
                        Our Direct Access program empowers you to see our specialized therapists without the extra steps, meaning less waiting, fewer co-pays, and quicker relief from pain or injury. Start your path to recovery now!
                    </p>
                    <Button className="schedule-button">Schedule Now</Button>
                </div>
            </div>

            <div className="faq-section">
                <h3>Frequently Asked Questions</h3>
                <div className="faq">
                    {faqData.map((faq, index) => (
                        <Card key={index}>
                            <Button onClick={() => toggleFAQ(index)} className="faq-question">
                                {faq.question}
                            </Button>
                            <Collapse isOpen={faqOpen[index]}>
                                <CardBody className="faq-answer">{faq.answer}</CardBody>
                            </Collapse>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "Q: What's the difference between direct access and referral-based physical therapy?",
        answer: "Direct access to physical therapy means a patient can receive physical therapy treatment without a referral from a physician, while referral-based therapy requires a referral before treatment can begin."
    },
    {
        question: "Q: Does Direct Access cost more?",
        answer: "No, there is no additional cost for direct access patients."
    },
    {
        question: "Q: How does Direct Access help me?",
        answer: "By eliminating the referral requirement, patients can start treatment faster and benefit from improved outcomes while reducing healthcare costs."
    },
    {
        question: "Q: What should I expect during my initial evaluation?",
        answer: "During the initial visit, our therapist will evaluate your condition, develop a treatment plan, and include exercises, manual therapy, or other techniques to improve your function."
    },
    {
        question: "Q: Why is Direct Access beneficial?",
        answer: "Direct Access saves time, money, and leads to higher patient satisfaction by allowing you to get care faster without a doctor's visit first."
    },
    {
        question: "Q: Is Direct Access covered by insurance?",
        answer: "In most cases, yes. However, it's best to check with your insurance provider regarding coverage under your plan."
    },
    {
        question: "Q: Will my physical therapist still communicate with my primary care doctor?",
        answer: "Yes. We work closely with all healthcare providers to ensure seamless communication for your treatment."
    }
];

export default DirectAccess;
