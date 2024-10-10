import userlove from "../../Assets/Icons/userlove.svg";
import clinics from "../../Assets/Images/clinics.png";
import greaterthan from "../../Assets/Icons/greaterthan.svg";
// To remove UnderConstruction component, add path in const Trials.

const Trials = [
  {
    header: {
      part1: "50+",
      part2: "Clinic Trials",
    },
    text: "Over 50 clinical trials seek participants. Joining offers education, insights into conditions, and access to cutting-edge medical treatments. Be part of advancing healthcare today.",
    images: [
      {
        src: userlove,
        alt: "icon of a heart",
      },
    ],
    path: "",
    buttonText: "View clinic trials",
    buttonIcon: "",
  },
  {
    header: {
      part1: "100+",
      part2: "Study Locations",
    },
    text: "",
    images: [
      {
        src: clinics,
        alt: "Names of clinics: John Hopkins, Mayo Clinic, Recursion Pharmaceuticals",
      },
    ],
    path: "",
    buttonText: "Learn More",
    buttonIcon: greaterthan,
  },
];

export default Trials;
