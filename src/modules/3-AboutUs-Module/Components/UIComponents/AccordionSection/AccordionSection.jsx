import styles from "./AccordionSection.module.css";
import BlueExpandIcon from "../BlueExpandIcon/BlueExpandIcon";
import GreyExpandIcon from "../GreyExpandIcon/GreyExpandIcon";
import React from "react";

const AccordionSection = ({
  title,
  visibleContent,
  hiddenContent,
  buttonColor,
  className,
  image,
  isExpanded,
  onToggle,
}) => {
  const {
    titleStyle = "",
    visibleContentStyle = "",
    hiddenContentStyle = "",
    customAccordionSection = "",
  } = className || {};

  const formattedHiddenContent = Object.entries(hiddenContent).map(
    ([key, value]) =>
      React.isValidElement(value) ? value : <p key={key}>{value}</p>
  );
  const formattedVisibleContent = visibleContent
    ? Object.entries(visibleContent).map(([key, value]) =>
        React.isValidElement(value) ? value : <p key={key}>{value}</p>
      )
    : null;

  return (
    <article
      className={`${styles.accordionSection} ${customAccordionSection} ${
        buttonColor === "grey" && isExpanded ? styles.greyButtonExpanded : ""
      }`}
      onClick={onToggle}
    >
      {buttonColor === "grey" ? (
        <aside className={styles.greyCircle}>
          <GreyExpandIcon isExpanded={isExpanded} />
        </aside>
      ) : buttonColor === "blue" ? (
        <aside className={styles.blueCircle}>
          <BlueExpandIcon isExpanded={isExpanded} />
        </aside>
      ) : null}

      <div
        className={`${
          buttonColor === "grey" && isExpanded
            ? styles.applyPadding
            : buttonColor === "blue"
            ? styles.applyGap
            : ""
        }`}
      >
        <header
          className={`${titleStyle} ${
            buttonColor === "grey" ? styles.applyPadding : ""
          }`}
          style={{ color: "black" }}
        >
          {title}
          {buttonColor === "grey" && title ? (
            <aside className={styles.greyCircleDesktop}>
              <GreyExpandIcon isExpanded={isExpanded} />
            </aside>
          ) : buttonColor === "blue" && title ? (
            <aside className={styles.blueCircleDesktop}>
              <BlueExpandIcon isExpanded={isExpanded} />
            </aside>
          ) : null}
        </header>
        <section
          className={`${styles.visibleContent} ${visibleContentStyle} ${
            formattedVisibleContent ? "" : styles.applyHidden
          }`}
          style={!visibleContent ? { display: "none" } : {}}
        >
          {formattedVisibleContent}
          {buttonColor === "grey" && !title ? (
            <aside className={styles.greyCircleDesktop}>
              <GreyExpandIcon isExpanded={isExpanded} />
            </aside>
          ) : buttonColor === "blue" && !title ? (
            <aside className={styles.blueCircleDesktop}>
              <BlueExpandIcon isExpanded={isExpanded} />
            </aside>
          ) : null}
        </section>
        <section
          className={`${styles.hiddenContent} ${hiddenContentStyle} ${
            isExpanded ? styles.show : ""
          }`}
        >
          {image && <div>{image}</div>}
          {formattedHiddenContent}
        </section>
      </div>
    </article>
  );
};

export default AccordionSection;
