import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import ChatbotAvatar from "./widgets/Avatar/botAvatar";
import Admission from "./widgets/docs/Admission";
import GeneralOptions from "./widgets/Options/GeneralOptions/GeneralOptions";
import ConcernOptions from "./widgets/Options/GeneralOptions/ConcernOptions";
import Enrollment from "./widgets/docs/Enrollment";
import Documents from "./widgets/docs/Documents";
import Payments from "./widgets/docs/Payments";
import PUPSIS from "./widgets/docs/PUPSIS";
import AdmissionOptions from "./widgets/Options/GeneralOptions/AdmissionOptions";
import Tuition from "./widgets/docs/Tuition";
import Qualified from "./widgets/docs/Qualified";
import Courses from "./widgets/docs/Courses";
import PUPOrg from "./widgets/docs/PUPOrg";
import CampusOptions from "./widgets/Options/GeneralOptions/CampusOptions";
import Webpage from "./widgets/docs/Webpage";
import Administration from "./widgets/docs/Administration";
import President from "./widgets/docs/President";
import Header from "./widgets/Avatar/Header";
import Help from "./widgets/Options/GeneralOptions/Help";


const botName = "ASKolar";
const config = {
  botName: botName,
  customComponents: {
    header: (props) => <Header {...props} />,
    botAvatar: (props) => <ChatbotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#820000',
    },
    chatButton: {
      backgroundColor: '#990000',
    },
  },
  initialMessages: [
    createChatBotMessage(
      "Hi there👋 I'm ASKolar and I am here to help you 😃. Please ask me anything or you can use '.help' command.",
      {
        widget: "generalOptions",
      }
    ),
  ],


  // CUSTOMIZED MESSAGES
  widgets: [
    {
      widgetName: "admission",
      widgetFunc: (props) => <Admission {...props} />,
    },
    {
      widgetName: "enrollment",
      widgetFunc: (props) => <Enrollment {...props} />,
    },
    {
      widgetName: "documents",
      widgetFunc: (props) => <Documents {...props} />,
    },
    {
      widgetName: "payments",
      widgetFunc: (props) => <Payments {...props} />,
    },
    {
      widgetName: "pupsis",
      widgetFunc: (props) => <PUPSIS {...props} />,
    },
    {
      widgetName: "tuition",
      widgetFunc: (props) => <Tuition {...props} />,
    },
    {
      widgetName: "caepup",
      widgetFunc: (props) => <Qualified {...props} />,
    },
    {
      widgetName: "courses",
      widgetFunc: (props) => <Courses {...props} />,
    },
    {
      widgetName: "puporg",
      widgetFunc: (props) => <PUPOrg {...props} />,
    },
    {
      widgetName: "webpage",
      widgetFunc: (props) => <Webpage {...props} />,
    },
    {
      widgetName: "admin",
      widgetFunc: (props) => <Administration {...props} />,
    },
    {
      widgetName: "president",
      widgetFunc: (props) => <President {...props} />,
    },


    // OPTIONS
    {
      widgetName: "generalOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "admissionOptions",
      widgetFunc: (props) => <AdmissionOptions {...props} />,
    },
    {
      widgetName: "concernOptions",
      widgetFunc: (props) => <ConcernOptions {...props} />,
    },
    {
      widgetName: "campusOptions",
      widgetFunc: (props) => <CampusOptions {...props} />,
    },
    {
      widgetName: "help",
      widgetFunc: (props) => <Help {...props} />,
    },

  ],
};

export default config;
