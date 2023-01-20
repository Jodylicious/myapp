import React from "react";
import Options from "../Options/Options";

const CampusOptions = (props) => {
  const options = [
    {
      name: "PUPBC Established",
      handler: props.actionProvider.establish,
      id: 23,
    },
    {
      name: "PUPBC Official Websites",
      handler: props.actionProvider.webpage,
      id: 24,
    },
    {
      name: "Location",
      handler: props.actionProvider.location,
      id: 25,
    },
    {
      name: "PUPBC Organization",
      handler: props.actionProvider.puporg,
      id: 26,
    },
    {
      name: "PUPBC Administration",
      handler: props.actionProvider.admin,
      id: 27,
    },
    {
      name: "PUP President",
      handler: props.actionProvider.president,
      id: 28,
    },
    {
      name: "Available Courses",
      handler: props.actionProvider.courses,
      id: 29,
    },

  ];

  return <Options options={options} />;
};

export default CampusOptions;
