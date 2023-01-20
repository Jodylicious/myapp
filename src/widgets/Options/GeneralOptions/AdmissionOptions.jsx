import React from "react";
import Options from "../Options/Options";

const AdmissionOptions = (props) => {
  const options = [
    {
      name: "Available Courses",
      handler: props.actionProvider.courses,
      id: 10,
    },
    {
      name: "Tuition Fee",
      handler: props.actionProvider.tuition,
      id: 11,
    },
    {
      name: "CAEPUP Qualified",
      handler: props.actionProvider.caepup,
      id: 12,
    },
    {
      name: "PUPBC Organization",
      handler: props.actionProvider.puporg,
      id: 13,
    },
    {
      name: "Campus Information",
      handler: props.actionProvider.campusInfo,
      id: 14,
    },
    {
      name: "Re-Admission",
      handler: props.actionProvider.returnee,
      id: 15,
    },
    {
      name: "Transfer Another PUP Branch",
      handler: props.actionProvider.puptransfer,
      id: 16,
    },
   
  ];

  return <Options options={options} />;
};

export default AdmissionOptions;
