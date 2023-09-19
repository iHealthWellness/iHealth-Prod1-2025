import React from "react";
import "./copywrite.css";
import Minusicon from "src/Assets/Icons/minus-icon.svg"
import T_icon from "src/Assets/Icons/T-icon.svg"

const copywrite = () => {
  return (
    <section className="copywrite-container">
        <div className="container2">
      <div className="title-h1">
        <h1 className="title">COPYWRITING</h1>
        <span className="minus-icon">
            <img className="remove-icon" src={Minusicon} alt="" />
        </span>
      </div>
    <div className="the-job">
      <div className="job">
        <h2 className="subtitle">Copywriter</h2>

        <span className="remote">Remote</span>

        <span className="T-icon">
            <img src={T_icon} alt="" />
        </span>
      </div>

      <div className="description-container">
        <h1 className="description-title">Description</h1>

        <p className="description-text">
          We are an 'early stage' pre-money nonprofit/ tech startup preparing
          for a proof-of-concept launch / seed-raise looking to recruit
          VOLUNTEERS (unpaid) as COPYWRITERS. Future Salary would be promised
          for employees (after seed funding round).
        </p>
      </div>

      <div className="responsibilities-container">
        <h1 className="responsibilities-title">Responsibilities</h1>

        <p className="responsibilities-text">
        • Interpret creative briefs to develop concepts for execution with
          assigned brands<br/> • Research and understand a client’s needs and target
          audiences, through online searches, reviews of existing research,
          interviews with subject-matter experts, and in-person meetings<br/> • Write
          original copy and edit content for a range of marketing and
          communications materials • Collaborate with a team of account managers
          and creative staff, from concept development to delivery of final
          product • Present copy concepts and final deliverables to internal
          team — and to client representative when requested — and participate
          occasionally in client pitches<br/> • Revise copy based on internal and
          client feedback • Oversee copy and content from concept to completion,
          maintaining stewardship of brand tone, voice and standards<br/>
          • Continuously monitor and adapt messaging strategy to increase open and
          click-through rates, customer acquisition and engagement, and support
          Search Engine Optimization goals<br/> • Stay up to date on marketing trends,
          follow industry best-practices and participate in ongoing knowledge
          sharing with larger team<br/> • Take direction and work both collaboratively
          and autonomously
        </p>
      </div>

      <div className="qualifications-container">
      <h1 className="qualifications-title">Qualifications</h1>

      <p className="qualifications-text">
      • Native (US) grammar and writing style <br/>
      • 3-8 years of experience as a professional content writer/copywriter. <br/>
      • A portfolio demonstrating strategic digital marketing including social and display ads, Search Engine Marketing, email marketing, website content, product promotions and blog style content (please include link to portfolio) <br/>
      • Strong understanding of digital best practices and the ability to execute against a broad variety of digital assets • Ability to generate compelling copy for both brand and performance marketing initiatives, and experience with developing copy for Search Engine Optimization <br/>
      • Excellent writing, editing, research and grammatical skills <br/>
      • Ability to work independently or with a team to meet deadlines <br/>
      • Excellent organizational skills and multitasking ability
      </p>
      </div>

      <div className="skills-container">
        <h1 className="skills-title">Preferred skills and qualifications</h1>

        <p className="skills-text">
        • Bachelor’s degree (or equivalent) in journalism, English, communications, or related discipline <br/>
        • Proofreading experience and familiarity with standard style guides <br/>
        • Experience with content management systems <br/>
        • Keen eye for detail and appreciation of great design <br/>
        • Familiarity with Agile ways of working (Scrum) <br/>
        • HealthTech experience is a plus <br/>
        • Previous experience at a startup or consulting company is a plus
        </p>
      </div>

      <div className="note-container">
        <p className="note-text">
        Through your pro-bono work, you will not only continue to demonstrate your current skills while gaining some new ones, practice teamwork, make new friends and develop professional connections in a professional setting, but you will also have the opportunity to demonstrate what companies value in ways other than paid employment: ability to get things done and ability to work as a team.

        </p>

        <div className="join-us">
            <p className="join-us-text">
            Join us, you win, we both win!!
            </p>
        </div>

        <div className="apply">
            <p className="apply-text">
            How to Apply: To apply for any open position, please contact HR at onehealthconnectapp@gmail.com
            </p>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default copywrite;
