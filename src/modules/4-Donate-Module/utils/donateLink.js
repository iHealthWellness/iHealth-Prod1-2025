const donateLink = () => {
  const donateUrl = import.meta.env.VITE_DONATE_LINK_URL || "";  
  if (donateUrl) {
    window.open(donateUrl, "_blank");
  } else {
    console.error("Donate URL is not set.");
  }
};

export default donateLink;
