import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Admission",
      handler: props.actionProvider.admission,
      id: 1,
    },
    {
      name: "Enrollment",
      handler: props.actionProvider.enrollment,
      id: 2,
    },
    {
      name: "Document Request / Certificates",
      handler: props.actionProvider.documents,
      id: 3,
    },
    {
      name: "Payments",
      handler: props.actionProvider.payments,
      id: 4,
    },
    {
      name: "Campus Information",
      handler: props.actionProvider.campusInfo,
      id: 5,
    },
    {
      name: "PUPSIS",
      handler: props.actionProvider.pupsis,
      id: 6,
    },
    {
      name: "Appointment",
      handler: props.actionProvider.appointment,
      id: 7,
    },
    {
      name: "Other Concern",
      handler: props.actionProvider.concern,
      id: 8,
    },
    {
      name: "Disclaimer",
      handler: props.actionProvider.disclaimer,
      id: 9,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
