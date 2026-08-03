import React from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Sharo O Osman",
    role: "CEO",
    subtitle: "Leader & Manager",
    description:
      "Driving Vexora’s vision, strategy, and client delivery with focus, clarity, and operational strength.",
    accent: "accent-ceo",
  },
  {
    name: "Xwncha M Rostam",
    role: "CPO",
    subtitle: "Chief Marketing & Customer Growth",
    description:
      "Owning customer experience, marketing, and brand storytelling to build trust and momentum around every launch.",
    accent: "accent-cpo",
  },
];

export default function Team() {
  return (
    <section id="team" className="team-section relative px-6 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1100px] text-center">
        <div className="team-header">
          <div className="eyebrow">Team</div>
          <h1 className="team-title">architects of every launch</h1>
          <p className="team-sub">The people shaping product, engineering, and partnership — united by craft, clarity, and momentum.</p>
        </div>

        <div className="team-grid mt-14">
          {teamMembers.map((member, index) => (
            <article key={member.name} className="member-card">
              <div className="member-card-top">
                <span className="member-count">0{index + 1} / 02</span>
              </div>
              <div className={`member-box ${member.accent}`}>
                <span className="member-box-role">{member.role}</span>
                <span className="member-box-glow" />
              </div>
              <div className="member-card-body">
                <div className="member-badge">{member.role}</div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.subtitle}</p>
                <p className="member-bio">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
