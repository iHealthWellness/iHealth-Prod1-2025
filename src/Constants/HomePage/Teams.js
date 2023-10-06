// Import Local Files
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
      { text: "Quality Of Life Measures", link: "https://www.youtube.com/" },
      { text: "NF Registry", link: "/nf-registry" },
      { text: "Find A Provider", link: "/find-provider" }
    ],
    detailUrl: "/#Home-Page-provider-container",
  },
  {
    icon: {
      src: personsImage,
      alt: "Group icon",
    },
    heading: "Research",
    content: [
      { text: "Research Tools & Resources", link: "/research-tools" },
      { text: "Clinical Drug Therapies", link: "/clinical-drug-therapies" },
      { text: "Participate in Research", link: "/participate-research" }
    ],
    detailUrl: "/research",
  },
  {
    icon: {
      src: educationImage,
      alt: "Education icon",
    },
    heading: "Education",
    content: [
      { text: "Understanding the Condition", link: "/understanding-condition" },
      { text: "Conferences and Workshops", link: "/conferences-workshops" },
      { text: "Workshops", link: "/workshops" }
    ],
    detailUrl: "#Information",
  }
];

export default Teams;
