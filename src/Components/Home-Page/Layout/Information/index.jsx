import InformationHeader from "./InformationHeader";
import InformationTabs from "./InformationTabs";

import "./index.css";
import InformationCards from "./InformationCards";

const Information = () => {
  return (
    <section id="Information" className="information-container">
      <InformationHeader />
      <div className="information-divider"></div>
      <InformationTabs />
      <InformationCards />
    </section>
  );
};

export default Information;
