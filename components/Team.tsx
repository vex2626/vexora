import React from "react";
import "./Team.css";

export default function Team() {
  return (
    <section id="team" className="team-section relative px-6 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1100px] text-center">
        <div className="team-header">
          <div className="eyebrow">Our People</div>
          <h1 className="team-title">Team — crafted for product and delivery</h1>
          <p className="team-sub">The small core behind Vexora. Lean, focused, and fully involved from concept to delivery.</p>
        </div>

        <div className="team-grid mt-14">
          <article className="member-card">
            <div className="member-visual">
              <div className="avatar avatar-sharo">SO</div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Sharo Omar</h3>
              <div className="member-role">Founder · Lead Engineer</div>
              <p className="member-bio">Handles product, engineering, deployment, and project leadership. The technical and operational backbone of Vexora.</p>

              <div className="member-contact">
                <a href="#" aria-label="Email Sharo" className="contact-link">Email</a>
                <a href="#" aria-label="Sharo Linkedin" className="contact-link">LinkedIn</a>
              </div>
            </div>
          </article>

          <article className="member-card">
            <div className="member-visual">
              <div className="avatar avatar-lara">LA</div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Lara Azad</h3>
              <div className="member-role">Product Designer</div>
              <p className="member-bio">Designs product experiences, visual systems, and interface details. Shapes the look-and-feel and usability of every project.</p>

              <div className="member-contact">
                <a href="#" aria-label="Email Lara" className="contact-link">Email</a>
                <a href="#" aria-label="Lara Linkedin" className="contact-link">LinkedIn</a>
              </div>
            </div>
          </article>
        </div>

        <p className="team-note">Prefer a different layout or want profile photos and social links added? I can wire those in next.</p>
      </div>
    </section>
  );
}
