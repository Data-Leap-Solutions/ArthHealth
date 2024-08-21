import React from 'react';
import './MeetOurTeam.css';

const teamMembers = [
    {
        name: 'John Smith',
        title: 'Lead Physical Therapist',
        imageUrl: '/path-to-image/john.jpg',
        bio: 'John has over 10 years of experience in physical therapy, specializing in sports rehabilitation and manual therapy.',
        quote: '“I love helping people regain their strength and live pain-free lives.”'
    },
    {
        name: 'Jane Doe',
        title: 'Physical Therapist Assistant',
        imageUrl: '/path-to-image/jane.jpg',
        bio: 'Jane is passionate about working closely with patients and supporting them throughout their rehabilitation journey.',
        quote: '“It’s all about making a difference in someone’s day.”'
    },
    {
        name: 'Emily Davis',
        title: 'Clinic Coordinator',
        imageUrl: '/path-to-image/emily.jpg',
        bio: 'Emily ensures the clinic runs smoothly, providing exceptional support to both staff and patients.',
        quote: '“I’m here to make your experience as easy and enjoyable as possible.”'
    }
];

const MeetOurTeam = () => {
    return (
        <section id="meet-the-team" className="container">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.imageUrl} alt={member.name} className="team-member-image" />
                        <h3>{member.name}</h3>
                        <p className="team-member-title">{member.title}</p>
                        <p className="team-member-bio">{member.bio}</p>
                        <blockquote className="team-member-quote">{member.quote}</blockquote>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetOurTeam;
