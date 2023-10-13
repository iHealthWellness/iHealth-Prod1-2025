import heartImage from "src/Assets/Icons/team-heart.svg";
import personsImage from "src/Assets/Icons/team-group.svg";
import educationImage from "src/Assets/Icons/team-education.svg";

const Teams = [
  {
    icon: {
      src: heartImage,
      alt: "Heart icon",
    },
    heading: "Living with NF",
    content: [
      { text: "Understanding NF", path: "" },
      { text: "Survey Now: Clinical Trials", path: "/nf-registry" },
      { text: "Sign-Up: NF Registry", path: "/find-provider" }
    ],
    detailPath: "/#Home-Page-provider-container",
  },
  {
    icon: {
      src: personsImage,
      alt: "Group icon",
    },
    heading: "Research",
    content: [
      { text: "Research Tools & Resources", path: "/research/#tools" },
      { text: "Clinical Drug Therapies", path: "/research/#clinical" },
      { text: "Participate in Research", path: "/research/#participate" }
    ],
    detailPath: "/research",
  },
  {
    icon: {
      src: educationImage,
      alt: "Education icon",
    },
    heading: "Education",
    content: [
      { text: "For Patients", path: "/understanding-condition" },
      { text: "For Providers", path: "/conferences-workshops" },
      { text: "For Caregivers", path: "/workshops" }
    ],
    detailPath: "#Information",
  }
];

export default Teams;
