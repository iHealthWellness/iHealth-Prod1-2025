//Import Local Files
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
    content: ["Quality Of Life Measures", "NF Registry", "Find A Provider"],
    detailUrl: "/#Home-Page-provider-container",
  },
  {
    icon: {
      src: personsImage,
      alt: "Group icon",
    },
    heading: "Research",
    content: [
      "Research Tools & Resources",
      "Clinical Drug Therapies",
      "Participate in Research",
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
      "Understanding the Condition",
      "Conferences and Workshops",
      "Workshops",
    ],
    detailUrl: "#Information",
  },
];

export default Teams;
