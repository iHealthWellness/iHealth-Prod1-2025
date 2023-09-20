import React from "react";
import { BntTab } from "./ButtonTab";
import { ArrowTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus.png";
import minusbtn from "src/Assets/Icons/minus.png";
import topArrow from "src/Assets/Icons/icon.png";
import downArrow from "src/Assets/Icons/icon2 (2).png";

import { useState } from "react";

const Development = () => {
  const [accordion, setAccordion] = useState({
    privacy: false,
    clear: false,
    free: false,
    showcase: false,
    bare: false,
    expose: false,
    disclose: false,
  });

  const [developmentVisible, setDevelopmentVisible] = useState(false);

  const toggleAccordion = (content) => (e) => {
    setAccordion((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  const toggleDevelopment = () => {
    setDevelopmentVisible((prev) => !prev); 
  };

  return (
    <div className="layerTwo-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header" onClick={toggleDevelopment}>DEVELOPMENT</h3>
          <BntTab
            icon={developmentVisible ? minusbtn : plusbtn}
            onClick={toggleDevelopment}
          />
        </div>

        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <h2 className="grid-title">
                EPIC Interface / Integration Specialist 
              </h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.clear ? topArrow : downArrow}
                onClick={toggleAccordion("clear")}
              />
            </div>
          )}

          <hr />
          {accordion.clear && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS (unpaid) as an EPIC Interface/ Integrations
                Specialist who will help us with signing and implementing
                integration solutions between EPIC and other systems.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Design and implement integration solutions between EPIC and
                  other systems
                </li>
                <li>
                  Be involved in the full life cycle of interface development
                  including requirements gathering, building, testing, go-live
                  and production support
                </li>
                <li>
                  Provide integration environment technical knowledge and
                  experience during the planning, execution, and management of
                  integrating new applications into the existing environment
                </li>
                <li>
                  Identify and resolve system integration issues and assist with
                  problem determination and resolution efforts when operational
                  issues with integration solutions arise
                </li>
                <li>
                  Develop standards, processes, and documents to support and
                  facilitate integration projects and initiatives
                </li>
              </ul>
              <h3 className="qualifications-title">Required Experience</h3>
              <ul className="qualifications-text">
                <li>
                  3+ years of experience of computer programming and analysis in
                  Healthcare field
                </li>
                <li>EPIC Bridges certification preferred</li>
                <li>
                  Experience with multiple software applications, systems
                  analysis/design, Integration/design, or web
                  applications/design
                </li>
                <li>
                  Strong verbal and written communication, interpersonal and
                  organizational skills
                </li>
                <li>
                  Excellent critical thinking and analytical skills, with a
                  passion for solving problems and creating solutions
                </li>
                <li>
                  Bachelor's degree in Computer Science, Information Technoloy,
                  or related field
                </li>
                <li>
                  Previous experience at a startup, consulting, or HealthTech
                  company is a plus
                </li>
                <li>
                  Ability to commit to a minimum of 4+ hour work weeks • Ability
                  to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing) Fluent in English
                </li>
              </ul>

              <p className="note-text">
                NOTE: Please note that candidates actively seeking
                CPT/Internships are ineligible for this particular volunteer
                position. Through your pro-bono work, you will not only continue
                to demonstrate your current skills while gaining some new ones,
                practice teamwork, make new friends and develop professional
                connections in a professional setting, but you will also have
                the opportunity to demonstrate what companies value in ways
                other than paid employment: ability to get things done and
                ability to work as a team.
              </p>
              <p className="note-text">Join us, you win, we both win!!</p>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <h2 className="grid-title">Principal Back-End Engineer</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.free ? topArrow : downArrow}
                onClick={toggleAccordion("free")}
              />
            </div>
          )}

          {developmentVisible && <hr />}

          {accordion.free && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS as BACK-END ENGINEERS.
              </p>
              <p className="description-text">
                You will be critical to the development and launch of our
                backend infrastructure and integrations. The ideal candidate
                will have a unique blend of technical expertise, insatiable
                curiosity, and analytical mindset.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  You will be responsible for development and maintenance of
                  mission critical APIs
                </li>
                <li>
                  Design, implement, and maintain highly scalable and performant
                  services
                </li>
                <li>
                  Design robust APIs to support web, mobile and desktop clients
                </li>
                <li>
                  Manage and optimize scalable distributed systems in the cloud
                </li>
                <li>
                  Optimize web applications for performance and scalability
                </li>
                <li>
                  Develop automated tests to ensure business needs are met, and
                  allow for regression testing
                </li>
                <li>Author technical documentation</li>
                <li>
                  Mentoring your peers, with the notion that helping others
                  means learning and growing themselves
                </li>
                <li>
                  Successfully mentored other engineers in the past and have
                  encouraged your peers to use software development best
                  practices for code testing and deployment
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>Two or more years in back-end development</li>
                <li>
                  Experience in building functional and effective platforms
                </li>
                <li>
                  Excellent foundation in computer science, algorithms, and web
                  design
                </li>
                <li>Experience in writing highly secure web applications</li>
                <li>Experience with core AWS web-enabling technologies</li>
                <li>Experience with observability and monitoring systems</li>
                <li>
                  Growth mindset that challenges the status quo and focuses on
                  outside-the-box ideas and solutions
                </li>
                <li>Strong presentation and communication skills</li>
                <li>
                  Experience in the US Healthcare System and Pharmaceutical
                  Patient Services
                </li>
                <li>Excellent communication skills</li>
                <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>
              </ul>

              <h3 className="qualifications-title">
                Preferred skills and qualifications
              </h3>
              <ul className="qualifications-text">
                <li>Bachelor’s degree (or equivalent) in computer science</li>
                <li>
                  Experience in designing RESTful APIs, specifically for mobile
                  apps
                </li>
                <li>Familiarity with Agile ways of working (Scrum)</li>
                <li>HealthTech experience is a plus</li>
              </ul>

              <p className="note-text">Join us, you win, we both win!!</p>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <h2 className="grid-title">Principal Front-End Engineer</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.showcase ? topArrow : downArrow}
                onClick={toggleAccordion("showcase")}
              />
            </div>
          )}

          {developmentVisible && <hr />}
          {accordion.showcase && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS (unpaid) as PRINCIPAL FRONT END ENGINEERS.
              </p>
              <p className="description-text">
                Future Salary would be promised for employees (after seed
                funding round).
              </p>
              <p className="description-text">
                You’ll be helping to improve the healthcare experience for our
                users by making it simpler and more efficient for patients to
                book an appointment with and visit a doctor.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Working with technologies like React/Redux building the
                  libraries and frameworks that power our front-end development
                </li>
                <li>
                  You might build features or native mobile apps that help
                  doctor’s visualize their value or develop core patient
                  experiences that change the way patients interact with
                  healthcare
                </li>
                <li>
                  Mentoring your peers, with the notion that helping others
                  means learning and growing themselves
                </li>
                <li>
                  Successfully mentored other engineers in the past and have
                  encouraged your peers to use software development best
                  practices for code testing and deployment
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>3+ years of full-time software engineering experience</li>
                <li>
                  Demonstrated ability to develop full-stack web and mobile
                  applications and experience
                </li>
                <li>
                  Implemented fast and efficient software solutions using
                  object-oriented or functional languages. Some of the
                  technologies we plan to use are React, C#, Scala, and Node.js,
                  however we are language agnostic
                </li>
                <li>
                  A passion for building platforms and understanding what makes
                  a great platform - infrastructure as code, automation,
                  libraries, APIs, and standardization
                </li>
                <li>
                  Experience architecting and developing scalable distributed
                  systems
                </li>
                <li>
                  Experience within AWS environments and a high emphasis on
                  testing is a plus
                </li>
                <li>
                  Proficient with Git source control and effective branching and
                  release management practices
                </li>
                <li>
                  Proficient creating user interfaces and resolving
                  cross-browser and backward compatibility issues
                </li>
                <li>
                  Ability to debug, diagnose and resolve complex JavaScript bugs
                  throughout the stack
                </li>
                <li>
                  Strong critical thinking skills; ability to devise innovative
                  solutions
                </li>
                <li>Ability to ramp up quickly and own features end-to-end</li>
                <li>Familiarity with Agile frameworks is a plus</li>
                <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>
                <li>HealthTech experience is a plus</li>
              </ul>

              <p className="note-text">Join us, you win, we both win!!</p>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <h2 className="grid-title">Principal Full-Stack Engineer</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.bare ? topArrow : downArrow}
                onClick={toggleAccordion("bare")}
              />
            </div>
          )}

          {developmentVisible && <hr />}

          {accordion.bare && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                preparing for a proof-of-concept launch / seed-raise looking to
                recruit VOLUNTEERS (unpaid) as PRINCIPAL FULL-STACK ENGINEERS.
              </p>
              <p className="description-text">
                You’ll be helping to improve the healthcare experience for our
                users by making it simpler and more efficient for patients to
                book an appointment with and visit a doctor.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  You’ll balance project leadership, individual contribution,
                  and mentorship
                </li>
                <li>
                  You’ll have the opportunity to work across the stack, front to
                  back, and everything in between
                </li>
                <li>
                  You’ll be using cutting-edge technology to help rapidly build
                  and scale a new product in a brand new business space
                </li>
                <li>
                  You’ll be helping to improve the healthcare experience for our
                  users by making it simpler and more efficient for patients to
                  book an appointment with and visit a doctor
                </li>
                <li>
                  Contributing to the end-to-end development of consumer-facing
                  applications
                </li>
                <li>
                  Building products designed to scale quickly like new patient
                  interactions, real-time video visits, and new functionality
                  that helps doctors optimize their experience
                </li>
                <li>
                  Shipping efficient and scalable code to millions of users
                  autonomously
                </li>
                <li>
                  Shipping efficient and scalable code to millions of users
                  autonomously
                </li>
                <li>
                  Collaborating with our agile team of dedicated and brilliant
                  engineers, product managers, and designers
                </li>
                <li>
                  You will partner with the product and design teams to develop
                  product improvements
                </li>
                <li>
                  Making a meaningful impact as you own and release features in
                  our CI environment that will impact patients, doctors, and
                  alike
                </li>
                <li>
                  Mentoring your peers, with the notion that helping others
                  means learning and growing yourself
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>
                  Passionate about building fully scalable platforms with the
                  latest technologies
                </li>
                <li>
                  A product-driven engineer who loves working in a highly
                  collaborative and supportive environment
                </li>
                <li>
                  Motivated by building products that make healthcare easier
                </li>
                <li>
                  Excited to use technology to enhance the consumer experience
                </li>
                <li>
                  Passionate about building diverse and inclusive teams and
                  culture
                </li>
                <li>
                  Excited to lead projects and be a mentor for other engineers
                </li>
                <li>
                  Passion for technology and the ability to think critically
                  about performance, scalability, and reliability of software
                </li>
                <li>
                  Implemented fast and efficient software solutions using
                  object-oriented or functional languages • Some of the
                  technologies we utilize are React, C#, Scala, and Node.js;
                  however, we are language agnostic
                </li>
                <li>
                  Designed and built user-facing web applications that scale
                </li>
                <li>
                  5+ years of professional full-stack development experience
                </li>
                <li>
                  Successfully mentored other engineers in the past and
                  encouraged your peers to use software development best
                  practices for code testing and deployment
                </li>
                <li>Familiarity with Agile frameworks is a plus</li>
                <li>
                  Ability to commit to a minimum of 4+ hour work weeks • Ability
                  to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>
                <li>HealthTech experience is a plus</li>
              </ul>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <h2 className="grid-title">Senior Platform Developer</h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.expose ? topArrow : downArrow}
                onClick={toggleAccordion("expose")}
              />
            </div>
          )}

          {developmentVisible && <hr />}
          {accordion.expose && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                looking to recruit VOLUNTEERS (unpaid) as SENIOR PLATFORM
                DEVELOPER to help develop our cross platform online medical, and
                wellness care scheduling App (web, ios, android).
              </p>
              <p className="description-text">
                Future Salary would be promised for employees (after seed
                funding round).
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  You’ll be helping to improve the healthcare experience for our
                  users by making it simpler and more efficient for patients to
                  book an appointment with and visit a doctor.
                </li>
                <li>
                  Participate in the full development life cycle, including
                  design, coding, testing and production release
                </li>
                <li>
                  The DEVELOPER PROJECT MANAGER volunteer is required to advise
                  and contribute to the development of the product (web, ios,
                  android)
                </li>
                <li>
                  Participate in formal and informal code reviews to ensure code
                  quality
                </li>
                <li>
                  Actively contribute to the automated test suite to enable
                  continuous integration
                </li>
                <li>
                  Assist with application deployments in our Cloud environment
                </li>
                <li>
                  Support production applications - investigate and resolve
                  production inquiries and issues.
                </li>
                <li>
                  Participate in the support of Major Incidents with Major
                  Incident Management (MIM)
                </li>
                <li>
                  Be a technical expert with expertise across multiple
                  technology areas and the ability to diagnose complex issues
                  throughout many technologies and apply this knowledge to
                  effective monitoring of applications
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>3+ years of full-time software engineering experience</li>
                <li>
                  Demonstrated ability to develop full-stack web and mobile
                  applications and experience
                </li>
                <li>
                  Implemented fast and efficient software solutions using
                  object-oriented or functional languages. Some of the
                  technologies we plan to use are React, C#, Scala, and Node.js,
                  however we are language agnostic
                </li>
                <li>
                  A passion for building platforms and understanding what makes
                  a great platform - infrastructure as code, automation,
                  libraries, APIs, and standardization
                </li>
                <li>
                  Experience architecting and developing scalable distributed
                  systems
                </li>
                <li>
                  Experience within AWS environments and a high emphasis on
                  testing is a plus
                </li>
                <li>
                  Proficient with Git source control and effective branching and
                  release management practices
                </li>
                <li>
                  Proficient creating user interfaces and resolving
                  cross-browser and backward compatibility issues
                </li>
                <li>
                  Ability to debug, diagnose and resolve complex JavaScript bugs
                  throughout the stack{" "}
                </li>
                <li>
                  Strong critical thinking skills; ability to devise innovative
                  solutions
                </li>
                <li>Ability to ramp up quickly and own features end-to-end</li>
                <li>Familiarity with Agile frameworks is a plus</li>
                <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>
                <li>HealthTech experience is a plus</li>
              </ul>

              <p className="apply-text">Join us, you win, we both win!!"</p>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>
        <div className="job-body">
          {developmentVisible && (
            <div className="grid">
              <h2 className="grid-title">Senior Software Engineer </h2>
              <h2 className="grid-text">Remote</h2>
              <ArrowTab
                icon={accordion.disclose ? topArrow : downArrow}
                onClick={toggleAccordion("disclose")}
              />
            </div>
          )}

          {developmentVisible && <hr />}
          {accordion.disclose && (
            <div className="text-tab-flow">
              <h2 className="description-title">Description</h2>
              <p className="description-text">
                We are an 'early stage' pre-money nonprofit/ tech startup
                looking to recruit VOLUNTEERS as SENIOR SOFTWARE ENGINEER to
                help develop our cross platform online medical, and wellness
                care App (web, ios, android). You're responsible for developing
                specifications, design, coding, testing, and debugging software
                applications using Java, SQL, NoSQL, HTML, JavaScript,
                TypeScript and related technologies.
              </p>
              <h3 className="responsibilities-title">Responsibilities</h3>
              <ul className="responsibilities-text">
                <li>
                  Participate in the full development life cycle, including
                  design, coding, testing and production release of the product
                  (web, ios, android)
                </li>
                <li>
                  Designs and implements conceptual, logical and physical data
                  models that represent business concepts and support business
                  processes
                </li>
                <li>
                  Builds data transformation pipelines that produce accurate
                  representations of data entities across software applications,
                  integration services and reporting frameworks.
                </li>
                <li>
                  Translates business requirements into high level technical
                  designs and assists other team members in implementing
                  solution
                </li>
                <li>Ensures availability of supported technology</li>
                <li>
                  Follows the program management methodology and works
                  collaboratively with all team members
                </li>
              </ul>
              <h3 className="qualifications-title">Qualifications</h3>
              <ul className="qualifications-text">
                <li>3+ years of full-time software engineering experience</li>
                <li>
                  Demonstrated ability to develop full-stack web and mobile
                  applications and experience
                </li>
                <li>
                  Implemented fast and efficient software solutions using
                  object-oriented or functional languages. We are language
                  agnostic
                </li>
                <li>
                  A passion for building platforms and understanding what makes
                  a great platform - infrastructure as code, automation,
                  libraries, APIs, and standardization
                </li>
                <li>
                  Experience architecting and developing scalable distributed
                  systems
                </li>
                <li>
                  Experience within AWS environments and a high emphasis on
                  testing is a plus
                </li>
                <li>
                  Proficient with Git source control and effective branching and
                  release management practices
                </li>
                <li>
                  Proficient creating user interfaces and resolving
                  cross-browser and backward compatibility issues
                </li>
                <li>
                  Ability to debug, diagnose and resolve complex JavaScript bugs
                  throughout the stack
                </li>
                <li>
                  Strong critical thinking skills; ability to devise innovative
                  solutions
                </li>
                <li>Ability to ramp up quickly and own features end-to-end</li>
                <li>Familiarity with Agile frameworks is a plus</li>
                <li>Ability to commit to a minimum of 4+ hour work weeks</li>
                <li>
                  Ability to attend weekly standup meeting (conference call with
                  desktop/ laptop access for screen sharing)
                </li>
                <li>HealthTech experience is a plus</li>
              </ul>
              <p className="apply-text">
                Future Salary would be promised for employees (after seed
                funding round).
              </p>
              <p className="apply-text">Join us, you win, we both win!!"</p>

              <p className="apply-text">
                How to Apply: To apply for any open position, please contact HR
                at hr-team@ihealthwellness.one
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Development;
