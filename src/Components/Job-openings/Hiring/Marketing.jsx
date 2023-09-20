import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import topArrow from "src/Assets/Icons/icon.png";
import downArrow from "src/Assets/Icons/icon2 (2).png";

import { useState } from "react";

const Marketing = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    opening: false,
    illustrate: false,
    appear: false,
    appearance: false,
    outline: false,
    prospect: false,
  });

  const [marketVisible, setMarketVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleMarket = () => {
    setMarketVisible((prev) => !prev); 
  };

  return (
    <div className="marketing">
      <div className="layerTwo-tab">
        <div>
          <div className="flex-tab">
            <h3 className="Text-header" onClick={toggleMarket}>MARKETING & PUBLIC RELATION </h3>
            <BntTab
              icon={marketVisible ? minusbtn : plusbtn}
              onClick={toggleMarket}
            />
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <h2 className="grid-title">Marketing and Outreach</h2>
                <h2 className="grid-text">Remote</h2>
                <ArrowTab
                  icon={accordion.opening ? topArrow : downArrow}
                  onClick={toggleAccordion("opening")}
                />
              </div>
            )}

            <hr />
            {accordion.opening && (
              <div className="text-tab-flow">
                <h2 className="description-title">Description</h2>
                <p className="description-text">
                  We are an 'early stage' pre-money nonprofit/ tech startup
                  preparing for a proof-of-concept launch / seed-raise looking
                  to recruit VOLUNTEERS (unpaid) as "Marketing and Outreach
                  Volunteer'. As a volunteer in this role, you will play a
                  crucial part in promoting our startup, acquiring customers,
                  and building brand awareness. Future Salary would be promised
                  for employees (after seed funding round).Responsibilities
                </p>
                <h3 className="responsibilities-title">Responsibilities</h3>
                <ul className="responsibilities-text">
                  <li>
                    Assist in creating and curating content for various
                    marketing channels, including social media platforms, blog
                    posts, newsletters, and website.
                  </li>
                  <li>
                    Engage with potential customers and target audience through
                    online and offline channels to generate interest and drive
                    user acquisition.
                  </li>
                  <li>
                    Conduct market research to identify potential customer
                    segments, trends, and competitors.
                  </li>
                  <li>
                    Support the development and execution of outreach
                    initiatives to connect with healthcare providers, wellness
                    organizations, and other relevant stakeholders.
                  </li>
                  <li>
                    Utilize social media platforms and online communities to
                    increase our startup's visibility and engage with the
                    audience.
                  </li>
                  <li>
                    Monitor and analyze marketing metrics to measure the
                    effectiveness of campaigns and provide recommendations for
                    improvement.
                  </li>
                  <li>
                    Stay up-to-date with industry trends, best practices, and
                    emerging marketing tools and techniques.
                  </li>
                </ul>
                <h3 className="qualifications-title">Required Experience</h3>
                <ul className="qualifications-text">
                  <li>
                    Passion for health and wellness, with a strong belief in the
                    benefits of our startup's services.
                  </li>
                  <li>Excellent verbal and written communication skills.</li>
                  <li>
                    Familiarity with social media platforms, content creation,
                    and digital marketing.
                  </li>
                  <li>
                    Basic understanding of marketing principles and concepts.
                  </li>
                  <li>
                    Self-motivated and proactive with the ability to work
                    independently and as part of a team.
                  </li>
                  <li>
                    Self-motivated and proactive with the ability to work
                    independently and as part of a team.
                  </li>
                  <li>
                    Strong organizational and time management skills to handle
                    multiple tasks and meet deadlines.
                  </li>
                  <li>
                    Ability to adapt to a fast-paced startup environment and
                    embrace new challenges.
                  </li>
                  <li>
                    Prior experience in marketing, outreach, or related fields
                    (preferred but not required).
                  </li>
                  <li>Fluent English (Advanced)</li>
                  <li>
                    Previous experience at a startup or consulting company is a
                    plus
                  </li>
                  <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                  <li>
                    Ability to attend weekly standup meeting (conference call
                    with desktop/ laptop access for screen sharing)
                  </li>
                  <li>HealthTech experience is a plus</li>
                </ul>

                <h3 className="skills-title">Benefits</h3>
                <ul className="skills-text">
                  <li>
                    Gain hands-on experience in marketing and outreach within
                    the health and wellness industry.
                  </li>
                  <li>
                    Opportunity to contribute to the growth of a startup and
                    make a positive impact on people's lives.
                  </li>
                  <li>
                    Develop valuable skills in content creation, social media
                    management, market research, and more.
                  </li>
                  <li>
                    Network and collaborate with professionals in the health and
                    wellness field.
                  </li>
                  <li>Flexible hours and remote work options.</li>
                </ul>

                <p className="note-text">
                  NOTE: Please note that candidates actively seeking
                  CPT/Internships are ineligible for this particular volunteer
                  position.Through your pro-bono work, you will not only
                  continue to demonstrate your current skills while gaining some
                  new ones, practice teamwork, make new friends and develop
                  professional connections in a professional setting, but you
                  will also have the opportunity to demonstrate what companies
                  value in ways other than paid employment: ability to get
                  things done and ability to work as a team.
                </p>
                <p className="apply-text">Join us, you win, we both win!!</p>

                <p className="apply-text">
                  How to Apply: To apply for any open position, please contact
                  HR at hr-team@ihealthwellness.one
                </p>
              </div>
            )}
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <h2 className="grid-title">Marketing Specialist </h2>
                <h2 className="grid-text">Remote</h2>
                <ArrowTab
                  icon={accordion.illustrate ? topArrow : downArrow}
                  onClick={toggleAccordion("illustrate")}
                />
              </div>
            )}
            {marketVisible && <hr />}
            {accordion.illustrate && (
              <div className="text-tab-flow">
                <h2 className="description-title">Description</h2>
                <p className="description-text">
                  We are an 'early stage' pre-money nonprofit/ tech startup
                  preparing for a proof-of-concept launch / seed-raise looking
                  to recruit VOLUNTEERS (unpaid) as MARKETING SPECIALISTS.As the
                  MARKETING SPECIALIST volunteer you will contribute to
                  identifying market fit & competitive landscape.Future Salary
                  would be promised for employees (after seed funding round).
                </p>
                <h3 className="responsibilities-title">Responsibilities</h3>
                <ul className="responsibilities-text">
                  <li>
                    Develop market fit and competitive landscape (pitch deck
                    slide: Target market and opportunity)
                  </li>
                  <li>Conduct competitive market research and analysis</li>
                  <li>Evaluate market opportunities to support market-entry</li>
                  <li>
                    Perform research, analyses, and testing with a variety of
                    tools to gain insights and shape marketing strategy
                  </li>
                  <li>
                    Collaborate with team members to optimize automation and
                    lead-nurturing process through email, content, events, and
                    social channelss
                  </li>
                  <li>
                    Assist in execution of marketing plans to reach audiences
                    through targeted channels
                  </li>
                  <li>
                    Create and distribute monthly reports on critical metrics
                    for lead generation, content creation, website traffic, and
                    other KPIs
                  </li>
                  <li>
                    Assist in the development and execution of campaigns,
                    including content creation, new-product launches, social
                    media, up-selling, cross-selling, and sales enablement
                  </li>
                </ul>
                <h3 className="qualifications-title">Qualifications</h3>
                <ul className="qualifications-text">
                  <li>
                    Experience with product launches or integrated marketing
                    campaigns
                  </li>
                  <li>Excellent communication and presentation skills</li>
                  <li>
                    Working knowledge of market research, surveys, and data
                    analytics
                  </li>
                  <li>Proficiency with content management systems</li>
                  <li>Experience in planning and leading initiatives</li>
                  <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                  <li>
                    Ability to attend weekly standup meeting (conference call
                    with desktop/ laptop access for screen sharing)
                  </li>
                </ul>

                <h3 className="skills-title">
                  Preferred skills and qualifications
                </h3>
                <ul className="skills-text">
                  <li>
                    Bachelor’s degree (or equivalent) in marketing,
                    communications, or related field
                  </li>
                  <li>Proficiency with HTML and Adobe Acrobat</li>
                  <li>
                    Team players with a desire to learn, iterate and move
                    quickly
                  </li>
                  <li>Familiarity with Agile ways of working (Scrum)</li>
                  <li>HealthTech experience is a plus</li>
                  <li>
                    Previous experience at a startup or consulting company is a
                    plus
                  </li>
                </ul>

                <p className="apply-text">
                  How to Apply: To apply for any open position, please contact
                  HR at hr-team@ihealthwellness.one
                </p>
              </div>
            )}
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <h2 className="grid-title">Marketing Strategy Consultant</h2>
                <h2 className="grid-text">Remote</h2>
                <ArrowTab
                  icon={accordion.appear ? topArrow : downArrow}
                  onClick={toggleAccordion("appear")}
                />
              </div>
            )}

            {marketVisible && <hr />}
            {accordion.appear && (
              <div className="text-tab-flow">
                <h2 className="description-title">Description</h2>
                <p className="description-text">
                  We are an 'early stage' pre-money nonprofit/ tech startup
                  preparing for a proof-of-concept launch / seed-raise looking
                  to recruit VOLUNTEERS (unpaid) as MARKETING SPECIALISTS.As the
                  MARKETING SPECIALIST volunteer you will contribute to
                  identifying market fit & competitive landscape.
                </p>
                <p className="description-text">
                  Future Salary would be promised for employees (after seed
                  funding round).
                </p>
                <h3 className="responsibilities-title">Responsibilities</h3>
                <ul className="responsibilities-text">
                  <li>
                    Develop market fit and competitive landscape (pitch deck
                    slide: Target market and opportunity)
                  </li>
                  <li>Conduct competitive market research and analysis</li>
                  <li>Evaluate market opportunities to support market-entry</li>
                  <li>
                    Perform research, analyses, and testing with a variety of
                    tools to gain insights and shape marketing strategy
                  </li>
                  <li>
                    Plan, implement, and optimize paid and social media
                    marketing campaigns
                  </li>
                  <li>
                    Ensure our online presence is consistent and effective
                  </li>
                  <li>
                    Monitor and analyze campaign performance to identify areas
                    of improvement and optimize future campaigns
                  </li>
                  <li>
                    Stay up-to-date with industry trends and best practices to
                    continuously improve our marketing efforts
                  </li>
                  <li>
                    Collaborate with team members to optimize automation and
                    lead-nurturing process through email, content, events, and
                    social channels
                  </li>
                  <li>
                    Assist in execution of marketing plans to reach audiences
                    through targeted channels
                  </li>
                  <li>
                    Assist in the development and execution of campaigns,
                    including content creation, new-product launches, social
                    media, upselling, cross-selling, and sales enablement
                  </li>
                </ul>
                <h3 className="qualifications-title">Qualifications</h3>
                <ul className="qualifications-text">
                  <li>
                    Experience with product launches or integrated marketing
                    campaigns
                  </li>
                  <li>Excellent communication and presentation skills </li>
                  <li>
                    Working knowledge of market research, surveys, and data
                    analytics
                  </li>
                  <li>Proficiency with content management systems </li>
                  <li>Experience in planning and leading initiatives</li>
                  <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                  <li>
                    Ability to attend weekly standup meeting (conference call
                    with desktop/ laptop access for screen sharing)
                  </li>
                </ul>

                <h3 className="skills-title">
                  Preferred skills and qualifications
                </h3>
                <ul className="skills-text">
                  <li>
                    Bachelor’s degree (or equivalent) in marketing,
                    communications, or related field
                  </li>
                  <li>Proficiency with HTML and Adobe Acrobat</li>
                  <li>
                    Team players with a desire to learn, iterate and move
                    quickly
                  </li>
                  <li>Familiarity with Agile ways of working (Scrum)</li>
                  <li>HealthTech experience is a plus</li>
                  <li>
                    Previous experience at a startup or consulting company is a
                    plus
                  </li>
                </ul>

                <p className="note-text">
                  Through your pro-bono work, you will not only continue to
                  demonstrate your current skills while gaining some new ones,
                  practice teamwork, make new friends and develop professional
                  connections in a professional setting, but you will also have
                  the opportunity to demonstrate what companies value in ways
                  other than paid employment: ability to get things done and
                  ability to work as a team.
                </p>

                <p className="note-text">
                  Future Salary would be promised for employees (after seed
                  funding round).
                </p>

                <p className="apply-text">
                  How to Apply: To apply for any open position, please contact
                  HR at hr-team@ihealthwellness.one
                </p>
              </div>
            )}
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <h2 className="grid-title">
                  Parliamentary Procedure Specialist
                </h2>
                <h2 className="grid-text">Remote</h2>
                <ArrowTab
                  icon={accordion.appearance ? topArrow : downArrow}
                  onClick={toggleAccordion("appearance")}
                />
              </div>
            )}

            {marketVisible && <hr />}
            {accordion.appearance && (
              <div className="text-tab-flow">
                <h2 className="description-title">Description</h2>
                <p className="description-text">
                  We are an 'early stage' pre-money nonprofit/ tech startup
                  preparing for a proof-of-concept launch / seed-raise looking
                  to recruit VOLUNTEERS (unpaid) as PARLIAMENTARY PROCEDURE
                  SPECIALIST. Future Salary would be promised for employees
                  (after seed funding round).
                </p>

                <h3 className="responsibilities-title">Responsibilities</h3>
                <ul className="responsibilities-text">
                  <li>
                    Plays a crucial role in assisting the CEO in preparing for
                    meetings to ensure they follow Robert's Rules of Order.
                  </li>
                  <li>
                    This includes reviewing the agenda, identifying required
                    procedures, and ensuring necessary documentation is
                    available.
                  </li>
                  <li>
                    Comprehensive understanding of Robert's Rules of Order.
                  </li>
                  <li>
                    They should be familiar with the key principles and
                    guidelines outlined in Robert's Rules and be able to provide
                    guidance on their implementation.
                  </li>
                  <li>Meeting Procedures and Documentation.</li>
                  <li>Facilitate Meeting Process.</li>
                  <li>Record and Distribute Meeting Minutes.</li>
                  <li>Continuous Improvement.</li>
                </ul>
                <h3 className="qualifications-title">Qualifications</h3>
                <ul className="qualifications-text">
                  <li>
                    The Specialist should have a thorough understanding of
                    parliamentary procedures and a deep knowledge of Robert's
                    Rules of Order. They should have experience applying these
                    rules in real-world meeting scenarios.
                  </li>
                  <li>
                    Familiarity with Meeting Facilitation: Strong experience in
                    facilitating meetings and guiding discussions is essential.
                    The Specialist should be comfortable managing diverse groups
                    of participants and resolving conflicts within the context
                    of Robert's Rules.
                  </li>
                  <li>
                    Excellent Communication Skills: Effective communication is
                    crucial for explaining and clarifying the rules to meeting
                    participants. The Specialist should possess excellent verbal
                    and written communication skills to convey complex concepts
                    in a clear and concise manner.
                  </li>
                  <li>
                    Attention to Detail: Precise record-keeping and
                    minute-taking are essential aspects of the role. The
                    Specialist should demonstrate a keen eye for detail and
                    accuracy to ensure that meeting minutes capture all
                    significant discussions and decisions accurately.
                  </li>
                  <li>
                    Adaptability and Problem-Solving: The Specialist should be
                    adaptable and able to think on their feet, as meetings may
                    present unexpected challenges or situations that require
                    quick problem-solving while adhering to Robert's Rules.
                  </li>
                  <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                  <li>
                    Ability to attend weekly standup meeting (conference call
                    with desktop/ laptop access for screen sharing)
                  </li>
                  <li>HealthTech experience is a plus</li>
                </ul>
                <p className="note-text">
                  Through your pro-bono work, you will not only continue to
                  demonstrate your current skills while gaining some new ones,
                  practice teamwork, make new friends and develop professional
                  connections in a professional setting, but you will also have
                  the opportunity to demonstrate what companies value in ways
                  other than paid employment: ability to get things done and
                  ability to work as a team.
                </p>

                <p className="apply-text">
                  How to Apply: To apply for any open position, please contact
                  HR at hr-team@ihealthwellness.one
                </p>
              </div>
            )}
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <h2 className="grid-title">Product Specialist/Associate</h2>
                <h2 className="grid-text">Remote</h2>
                <ArrowTab
                  icon={accordion.outline ? topArrow : downArrow}
                  onClick={toggleAccordion("outline")}
                />
              </div>
            )}
            {marketVisible && <hr />}
            {accordion.outline && (
              <div className="text-tab-flow">
                <h2 className="description-title">Description</h2>
                <p className="description-text">
                  We are an 'early stage' pre-money nonprofit/ tech startup
                  preparing for a proof-of-concept launch / seed-raise looking
                  to recruit VOLUNTEERS (unpaid) as PARLIAMENTARY PROCEDURE
                  SPECIALIST. Future Salary would be promised for employees
                  (after seed funding round).
                </p>

                <h3 className="responsibilities-title">Responsibilities</h3>
                <ul className="responsibilities-text">
                  <li>
                    Evaluate, analyze, author and communicate systems
                    requirements on a continuing basis, and maintain systems
                    processes
                  </li>
                  <li>
                    Drive the execution of all processes in the product
                    lifecycle, including product and market research, competitor
                    analysis, planning, positioning, requirements and roadmap
                    development, and product launch
                  </li>
                  <li>
                    Translate product strategy into detailed requirements for
                    prototyping and final development by engineering teams
                  </li>
                  <li>
                    Drive the product- and business-planning processes for
                    cross-functional teams
                  </li>
                  <li>
                    Develop, implement, and maintain production timelines across
                    multiple departments
                  </li>
                  <li>
                    Appraise new product ideas and strategize appropriate
                    go-to-market plans
                  </li>
                </ul>
                <h3 className="qualifications-title">Qualifications</h3>
                <ul className="qualifications-text">
                  <li>Proven work experience in software development</li>
                  <li>
                    Strong experience in a dynamic product management role
                  </li>
                  <li>
                    Proven success in overseeing all elements of the product
                    development lifecycle
                  </li>
                  <li>
                    Experience in delivering finely tuned product marketing
                    strategies
                  </li>
                  <li>
                    Exceptional writing and editing skills, combined with strong
                    presentation and public speaking skills
                  </li>
                  <li>
                    Experience working in an Agile/Scrum development process
                  </li>
                  <li>
                    Team players with a desire to learn, iterate and move
                    quickly
                  </li>
                  <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                  <li>
                    Ability to attend weekly standup meeting (conference call
                    with desktop/ laptop access for screen sharing)
                  </li>
                  <li>
                    Experience with performance and/or security testing is a
                    plus
                  </li>
                  <li>
                    BS/MS degree in Computer Science, Engineering or a related
                    subject
                  </li>
                  <li>HealthTech experience is a plus</li>
                </ul>
                <p className="note-text">Join us, you win, we both win!!"</p>

                <p className="apply-text">
                  How to Apply: To apply for any open position, please contact
                  HR at hr-team@ihealthwellness.one
                </p>
              </div>
            )}
          </div>

          <div className="job-body">
            {marketVisible && (
              <div className="grid">
                <h2 className="grid-title">
                  Social Media and Community Specialist
                </h2>
                <h2 className="grid-text">Remote</h2>
                <ArrowTab
                  icon={accordion.prospect ? topArrow : downArrow}
                  onClick={toggleAccordion("prospect")}
                />
              </div>
            )}

            {marketVisible && <hr />}
            {accordion.prospect && (
              <div className="text-tab-flow">
                <h2 className="description-title">Description</h2>
                <p className="description-text">
                  We are an 'early stage' pre-money nonprofit/ tech startup
                  preparing for a proof-of-concept launch / seed-raise looking
                  to recruit VOLUNTEERS (unpaid) as PARLIAMENTARY PROCEDURE
                  SPECIALIST.
                </p>
                <p className="description-text">
                  {" "}
                  Future Salary would be promised for employees (after seed
                  funding round).
                </p>

                <p className="description-text">
                  {" "}
                  The ideal candidate has experience building social media
                  presence from zero while growing a community, but more
                  importantly, has a scrappy can-do mindset. You should have
                  excellent communication skills and be able to express our
                  company’s views creatively.
                </p>

                <h3 className="responsibilities-title">Responsibilities</h3>
                <ul className="responsibilities-text">
                  <li>
                    Owning and creating a communication strategy for user-facing
                    social media channels
                  </li>
                  <li>
                    Help develop creative briefs and guide creative direction to
                    meet objectives for all advertising and public-­facing
                    communications, including print, digital, and video assets
                  </li>
                  <li>
                    Growing, managing, and engaging our communities on Facebook,
                    Instagram, LinkedIn, Slack, Discord, Twitter, and more
                  </li>
                  <li>
                    Creating content for users such as inspiring articles,
                    product demos, tutorials, and video shorts
                  </li>
                  <li>
                    Identifying and engaging with influencers and ambassadors
                  </li>
                </ul>
                <h3 className="qualifications-title">Qualifications</h3>
                <ul className="qualifications-text">
                  <li>
                    Proven work experience in the community management, social
                    media management, or developer relations
                  </li>
                  <li>
                    A strong writer with experience writing blog posts and
                    social media content
                  </li>
                  <li>
                    You know how to tailor your message to different audiences
                    in different mediums
                  </li>
                  <li>
                    You have a knack of developing content that audiences find
                    it invaluable
                  </li>
                  <li>Metrics-driven marketing mind with eye for creativity</li>
                  <li>
                    Passionate about building and supporting community members
                  </li>
                </ul>

                <h3 className="qualifications-title">
                  Preferred Skills and Qualifications
                </h3>
                <ul className="qualifications-text">
                  <li>
                    Bachelor’s degree (or equivalent) in marketing, business, or
                    related field
                  </li>
                  <li>
                    Proficiency with online marketing and social media strategy
                  </li>
                  <li>
                    Proven success in designing interactive applications and
                    networking platforms
                  </li>
                  <li>Experience with content management systems</li>
                  <li>Keen eye for detail and appreciation of great design</li>
                  <li>Familiarity with Agile ways of working (Scrum)</li>
                  <li>HealthTech experience is a plus</li>
                  <li>
                    Previous experience at a startup or consulting company is a
                    plus
                  </li>
                </ul>

                <p className="note-text">Join us, you win, we both win!!"</p>

                <p className="apply-text">
                  How to Apply: To apply for any open position, please contact
                  HR at hr-team@ihealthwellness.one
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
