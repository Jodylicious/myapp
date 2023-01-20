import React from "react";
import Options from "../Options/Options";

const Help = (props) => {
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
      name: "Re-Admission",
      handler: props.actionProvider.returnee,
      id: 15,
    },
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
      name: "Want to transfer in another PUP Branch?",
      handler: props.actionProvider.puptransfer,
      id: 16,
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

export default Help;
