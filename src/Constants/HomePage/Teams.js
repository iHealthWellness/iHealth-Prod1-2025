import heartImage from "src/Assets/Icons/team-heart.svg";
import personsImage from "src/Assets/Icons/team-group.svg";
import educationImage from "src/Assets/Icons/team-education.svg";

const Teams = [
  {
    icon: {
      src: personsImage,
      alt: "Group icon",
    },
    heading: "NF Research",
    content: [
      { text: "Research Tools & Resources", path: "/research/#tools" },
      { text: "Clinical Drug Therapies", path: "/research/#clinical" },
      { text: "Participate in Research", path: "/research/#participate" },
    ],
    detailPath: "/research",
  },
  {
    icon: {
      src: heartImage,
      alt: "Heart icon",
    },
    heading: "Living with NF",
    content: [
      { text: "Understanding NF", path: "/livingwith-nf/#understand-nf" },
      {
        text: "Survey Now: Clinical Trials",
        path: "/nf-survey",
      },
      { text: "Sign-Up: NF Registry", path: "/livingwith-nf/#signup-reg" },
    ],
    detailPath: "/livingwith-nf",
  },
  {
    icon: {
      src: educationImage,
      alt: "Education icon",
    },
    heading: "NF Education",
    content: [
      { text: "For Patients", path: "/understanding-condition" },
      { text: "For Caregivers", path: "/workshops" },
      { text: "For Providers", path: "/conferences-workshops" },
    ],
    detailPath: "#Information",
  },
];

export default Teams;
