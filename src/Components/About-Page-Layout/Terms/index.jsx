import { useState } from "react";
import ihealth from "src/Assets/Icons/ihealth-foundation.png";
import AccordionSection from "src/Components/UIComponents/AccordionSection/AccordionSection";
import styles from "./index.module.css";

const Terms = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionID) => {
    setActiveAccordion(activeAccordion === accordionID ? null : accordionID);
  };

  return (
    <div id="Terms" className={styles.termsContainer}>
      <header>
        <img src={ihealth} alt="ihealth logo" />
        <h1 className="D-H1-32">iHealth and Wellness Foundation, Inc.</h1>
        <h2 className="D-H2-30">Terms of Use</h2>
        <h2 className="D-H2-30">Effective: May 23,2023</h2>
      </header>
      <main className={`D-H3-24 ${styles.mainTermsSection}`}>
        <p>
          Welcome to our website! We connect patients with complex diseases to
          high-quality medical and wellness providers and resources through an
          integrated platform, empowering patients to take charge of their
          health while fostering collaboration among all stakeholders to improve
          healthcare outcomes.
        </p>
        <p>
          By using this website, you agree to the following terms and
          conditions:
        </p>
        <ul>
          <li>
            Content: All content provided on this website is for informational
            purposes only. We do not provide medical advice, diagnosis, or
            treatment. You should always consult your healthcare provider before
            making any healthcare decisions. We make no warranties, express or
            implied, regarding the accuracy, completeness, or reliability of any
            content on this website. We reserve the right to modify or remove
            any content at any time without prior notice.
          </li>
          <li>
            Use of Information: The information on this website is intended to
            be used as a resource to connect patients with complex diseases and
            health and wellness providers. Any information obtained through this
            website should not be used for commercial purposes. You agree to use
            the website only for lawful purposes and in compliance with all
            applicable laws and regulations. You agree not to use the website in
            any way that could damage, disable, overburden, or impair the
            website or interfere with any other party's use and enjoyment of the
            website. By using our website, you agree to indemnify and hold us
            harmless from any claims arising out of your use of the website
          </li>
        </ul>
        <section className={styles.termsAccordion}>
          <AccordionSection
            title="Privacy Policy"
            hiddenContent={{
              p1: "Protecting your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website. By using our website, you agree to the terms of this Privacy Policy. We collect personal information such as your name and email address when you sign up for our services. We use this information to provide you with the services you have requested and to communicate with you about our services. We do not share your personal information with third parties, except when required by law or when necessary to provide you with the services you have requested. We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We may use cookies to collect information about your use of our website. This information is used to improve our website and to provide you with a more personalized experience. You can choose to disable cookies in your web browser, but this may limit your use of our website. We may also use third-party services, such as Google Analytics, to analyze website traffic and usage. These third-party services may collect and use your information in accordance with their own privacy policies. iHealth and Wellness reserves the right to change this policy whenever deemed necessary and without prior notification. Should changes be made, they will be posted on this Privacy Notice with the date of revision.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              customAccordionSection: styles.customAccordionSection,
            }}
            isExpanded={activeAccordion === "PRIVACY"}
            onToggle={() => toggleAccordion("PRIVACY")}
          />
          <AccordionSection
            title="Correction of site Error"
            hiddenContent={{
              p1: "The information on the Site may contain typographical errors or inaccuracies. We reserve the right to update any information we see fit at any time without prior notice. please note that such errors may relate to product information,pricing and availability. In these instances, we shall have the right to terminate Any orders involving pricing errors or inaccuracies. We apologize for any inconveniences.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              customAccordionSection: styles.customAccordionSection,
            }}
            isExpanded={activeAccordion === "CORRECTION"}
            onToggle={() => toggleAccordion("CORRECTION")}
          />
          <AccordionSection
            title="Third Party Links"
            hiddenContent={{
              p1: "The Services may contain links to third-party websites or resources. We provide these links only as a convenience and are not responsible for the content, products or services on or available from those websites or resources or links displayed on such websites. You acknowledge sole responsibility for and assume all risk arising from your use of any third-party websites or resources.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              customAccordionSection: styles.customAccordionSection,
            }}
            isExpanded={activeAccordion === "thirdPARTY"}
            onToggle={() => toggleAccordion("thirdPARTY")}
          />
          <AccordionSection
            title="Termination"
            hiddenContent={{
              p1: "We may terminate your access to and use of the services, at our sole discretion, at any time and without notice to you.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              customAccordionSection: styles.customAccordionSection,
            }}
            isExpanded={activeAccordion === "TERMINATION"}
            onToggle={() => toggleAccordion("TERMINATION")}
          />
          <AccordionSection
            title="Disclaimer"
            hiddenContent={{
              p1: "The information provided on this website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. The website owner does not endorse or recommend any specific healthcare provider listed on the site, and is not responsible for the quality or performance of any healthcare provider listed on the site. The website owner does not guarantee the accuracy, completeness, or timeliness of the information provided on the site. Users are encouraged to verify the credentials and qualifications of any healthcare provider listed on the site before making an appointment. By using this website, users agree to hold the website owner harmless from any claims or damages arising from the use of the information provided on the site.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              customAccordionSection: styles.customAccordionSection,
            }}
            isExpanded={activeAccordion === "DISCLAIMER"}
            onToggle={() => toggleAccordion("DISCLAIMER")}
          />
          <AccordionSection
            title="Indemnity"
            hiddenContent={{
              p1: "You agree to indemnify and hold iHealth and Wellness Foundation, Inc., (the “Organization” and its officers, directors, agents, subsidiaries, joint ventures, and employees) harmless from any claim or demand, as well as losses, expenses, damages and costs, resulting from any violation of these Terms or your use of the Services (including negligent or wrongful conduct).",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              customAccordionSection: styles.customAccordionSection,
            }}
            isExpanded={activeAccordion === "INDEMNITY"}
            onToggle={() => toggleAccordion("INDEMNITY")}
          />
          <AccordionSection
            title="Use of Service"
            hiddenContent={{
              p1: "You agree that you won't do any of the following things: Use, display, mirror, or frame the Services, or any individual element within the Services, iHealth and Wellness (the “Organization”)'s name, any iHealth and Wellness (the “Organization”) trademark, logo, or other proprietary information (including through the use of meta tags or the like), or the layout and design of any page or form contained on a page, without our express written consent; Attempt to access or search the Services or Content or download Content from the Services through the use of any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by iHealth and Wellness (the “Organization”) or other generally available third-party web browsers; Send any unsolicited or unauthorized advertising, promotional materials, email, junk mail, spam, chain letters or other form of solicitation. Use the Services or Content, or any portion thereof, for any commercial purpose or for the benefit of any third party or in any manner not permitted by these Terms; Attempt to interfere in any way with the Services or the networks or network security hosting the Services, or attempt to use the Services to gain unauthorized access to any other computer system. Collect or store any personally identifiable information from the Services from other users of the Services without their express permission; Impersonate or misrepresent your affiliation with any person or entity; Violate any applicable law or regulation; or Encourage or enable any other third party or individual to do anything listed above. Although we're not obligated to monitor access to or use of the Services or Content or to review or edit any Content, we have the right to do so for the purpose of operating the Services, to ensure compliance with these Terms, and to comply with applicable law or other legal requirements. We reserve the right, but are not obligated, to remove or disable access to any Content, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider any Content to be objectionable or in violation of these Terms. We have the right to investigate violations of these Terms or conduct that affects the Services. We may also consult and cooperate with law enforcement authorities to prosecute users who violate the law.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              customAccordionSection: styles.customAccordionSection,
            }}
            isExpanded={activeAccordion === "useOFSERVICE"}
            onToggle={() => toggleAccordion("useOFSERVICE")}
          />
          <AccordionSection
            title="Binding Individual Arbitration"
            hiddenContent={{
              p1: "You and iHealth and Wellness (the “Organization”) agree that any and all Disputes, except those that are resolved informally or brought in a small claims court, will be arbitrated by a neutral arbitrator who has the power to award the same individual damages and individual relief that a court can. “Disputes” are defined as any claim, controversy, or dispute between you and iHealth and Wellness (the “Organization”), its processors, suppliers or licensors (or their respective affiliates, agents, directors or employees), whether based on past, present, or future events, including any claims relating in any way to these Terms or the Services, or any other aspect of our relationship. ANY ARBITRATION UNDER THESE TERMS WILL ONLY BE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS, CLASS ACTIONS, REPRESENTATIVE ACTIONS, AND CONSOLIDATION WITH OTHER ARBITRATIONS ARE NOT PERMITTED. YOU WAIVE ANY RIGHT TO HAVE YOUR CASE DECIDED BY A JURY AND YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION AGAINST iHEALTH AND WELLNESS (THE “ORGANIZATION”). If any provision of this arbitration agreement is found unenforceable, the unenforceable provision will be severed, and the remaining arbitration terms will be enforced (but in no case will there be a class or representative arbitration). Before an arbitration is commenced, you or iHealth and Wellness (the “Organization”) must first send to the other party a written Notice (“Notice”). Any Notice to iHealth and Wellness (the “Organization”) should be sent by email to legal-team@ihealthwellness.org AND certified mail to: iHealth and Wellness Foundation, Inc. - 2744 Hylan Blvd, Suite #175 (C/O Karcich), Staten Island, NY 10306, United States. Any Notice sent to you will be sent to the address on file for your account. The Notice must: (i) include your name and account number; (ii) describe the nature and basis of the Dispute; and (iii) set forth the specific relief sought. Both parties agree that they will attempt to resolve a dispute through an informal negotiation within thirty (30) days from the date the Notice is sent. After that thirty (30) day period and not before, either party may commence arbitration. If we are not able to resolve the Dispute by informal negotiation or, as provided below, in a small claims court, all Disputes will be resolved finally and exclusively by binding individual arbitration with a single arbitrator (the “Arbitrator”) administered by the American Arbitration Association (https://www.adr.org) according to this Section and the Consumer Arbitration Rules through the Procedures for the Resolution of Disputes through Document Submission (the “AAA Rules”), including Rule D-3(b), except you and iHealth and Wellness Foundation, Inc. will have the right to file early or summary dispositive motions and so long as the claim is arbitrable under the AAA Rules. The Arbitrator shall be responsible for determining all threshold arbitrability issues, including issues relating to whether these Terms (or any aspect thereof) are enforceable, unconscionable or illusory and any defense to arbitration, including waiver, delay, laches, or estoppel. Subject to applicable jurisdictional requirements, you may elect to pursue your claim in your local small-claims court rather than through arbitration so long as your matter remains in small claims court and proceeds only on an individual (non-class or non-representative) basis.",
            }}
            buttonColor="blue"
            className={{
              titleStyle: styles.titleStyle,
              customAccordionSection: styles.customAccordionSection,
            }}
            isExpanded={activeAccordion === "BINDING"}
            onToggle={() => toggleAccordion("BINDING")}
          />
        </section>
        <section>
          <h2 className="D-H3-24">LIMITATION OF LIABILITY</h2>
          <p>
            NEITHER iHEALTH AND WELLNESS (THE “ORGANIZATION”) NOR ANY OTHER
            PARTY (AND THE HEIRS, EXECUTORS AND ADMINISTRATORS OF SUCH PERSON)
            INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE
            LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
            DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE
            INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF
            SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS
            OR FROM THE USE OF OR INABILITY TO USE THE SERVICES, WHETHER BASED
            ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT
            LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT iHEALTH AND
            WELLNESS (THE “ORGANIZATION”) HAS BEEN INFORMED OF THE POSSIBILITY
            OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND
            TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT
            ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
            INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IN
            NO EVENT WILL iHEALTH AND WELLNESS (THE “ORGANIZATION”)'S TOTAL
            LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM
            THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT EXCEED THE
            AMOUNTS YOU HAVE PAID TO iHEALTH AND WELLNESS (THE “ORGANIZATION”)
            FOR USE OF THE SERVICES OR CONTENT OR ONE HUNDRED DOLLARS ($100), IF
            YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO iHEALTH AND WELLNESS
            (THE “ORGANIZATION”), AS APPLICABLE. THE EXCLUSIONS AND LIMITATIONS
            OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF
            THE BARGAIN BETWEEN iHEALTH AND WELLNESS (THE “ORGANIZATION”) AND
            YOU.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Terms;
