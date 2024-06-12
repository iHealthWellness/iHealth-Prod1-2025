//Import Libraries/Packages
import React, { useRef } from "react";

//Import Styles
import "./Donate10Days.css";

//Import Local files/components etc...
import ObvserverFunc from "../../Utiility/SlideAnimationObserver/ObvserverFunc";

function Donate10Days() {
  /* References for Html elements to be animated */
  const leftArticle = useRef();
  const rightArticle = useRef();
  const rootElm = useRef();

  /* Function for Animation Logic as when elements got into viewport */
  ObvserverFunc(leftArticle, rightArticle, {
    root: rootElm?.current,
    rootMargin: "100px",
    threshold: 0,
  });

  return (
    <>
      <div id="Donate10Days-Main-Container" ref={rootElm}>
        <div>
          <h3>
            <span id="fast-track" className="D-H1-32">
              Fast Track to Wellness –{" "}
            </span>
            <span className="D-H1-32">Raise $500 in 10 Days</span>
          </h3>
          <p className="D-H3-24">Transform your Futures!</p>
        </div>
        <div>
          <article id="beforeanimationleft" ref={leftArticle}>
            <h4 className="D-H3-24">DAY 1</h4>
            <p className="D-P-20"> Make a $25 self-donation.</p>
            <h4 className="D-H3-24">DAY 2 </h4>
            <p className="D-P-20">
              Speaking of your employer, why not request a company contribution
              of $100?
            </p>
            <h4 className="D-H3-24">DAY 3 </h4>
            <p className="D-P-20">Hit up 5 friends to donate $20 each.</p>
            <h4 className="D-H3-24">DAY 4</h4>
            <p className="D-P-20">
              {" "}
              Set up a Facebook Fundraiser with the goal of raising $50 or more
              from friends in your network.
            </p>
            <h4 className="D-H3-24">DAY 5</h4>
            <p className="D-P-20">
              {" "}
              Hold a team fundraiser and ask your team to donate the first $30.
              See how much you can raise beyond that to help you exceed your
              goal!
            </p>
          </article>
          <article id="beforeanimationright" ref={rightArticle}>
            <h4 className="D-H3-24">DAY 6</h4>
            <p className="D-P-20">
              Ask five people from your place of worship or gym to each make a
              $10 donation.
            </p>
            <h4 className="D-H3-24">DAY 7</h4>
            <p className="D-P-20">
              {" "}
              Ask three family members to donate $25 or more.
            </p>
            <h4 className="D-H3-24">DAY 8 </h4>
            <p className="D-P-20">
              Ask three businesses you frequent (e.g., hair salon, dry cleaner,
              favorite restaurant) to each contribute $15.
            </p>
            <h4 className="D-H3-24">DAY 9 </h4>
            <p className="D-P-20">Ask five co-workers to give $10 each.</p>
            <h4 className="D-H3-24">DAY 10</h4>
            <p className="D-P-20"> Ask five neighbors to donate $10 each.</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Donate10Days;
