import React from "react";
import Options from "../Options/Options";

const ConcernOptions = (props) => {
  const options = [
    {
      name: "Want to transfer in another PUP Branch?",
      handler: props.actionProvider.puptransfer,
      id: 17,
    },
    {
      name: "Want to re-admit in the PUPBC?",
      handler: props.actionProvider.returnee,
      id: 18,
    },
    {
      name: "I lost my school ID / Registration Card?",
      handler: props.actionProvider.lost,
      id: 19,
    },
    {
      name: "I can't enroll this semester",
      handler: props.actionProvider.enrollment,
      id: 20,
    },
    {
      name: "I have no grade yet in my subjects",
      handler: props.actionProvider.nograde,
      id: 21,
    },
    {
      name: "I have an INC grade in my subjects",
      handler: props.actionProvider.inc,
      id: 22,
    },

  ];

  return <Options options={options} />;
};

export default ConcernOptions;
