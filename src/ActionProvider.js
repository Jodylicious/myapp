class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const messages = this.createChatBotMessage(
      "Hi friend, it's nice to talk with you. I hope you too.",
      { withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  admission = () => {
    const messages = this.createChatBotMessage(
      "All admissions applications for new students are processed online through the PUP iApply. Applicants should meet the following requirements. See link for more information.",
      { widget: "admission", withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  enrollment = () => {
    const messages = this.createChatBotMessage(
      "You can click the link below on how to enroll in PUP.",
      { widget: "enrollment", withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  documents = () => {
    const messages = this.createChatBotMessage(
      "You can request forms from the Office of the Student Affairs and Services (OSAS) concerns and online transactions.",
      { widget: "documents", withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  payments = () => {
    const messages = this.createChatBotMessage(
      "Payments",
      { widget: "payments", withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  pupsis = () => {
    const messages = this.createChatBotMessage(
      "For accessing PUP Student Information System (PUPSIS).",
      { widget: "pupsis", withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  appointment = () => {
    const messages = this.createChatBotMessage(
      "For appointments, kindly send as an email through pupbinancampus@yahoo.com or contact 0967-550-4945 for the schedule of appointment.",
      { withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  disclaimer = () => {
    const messages = this.createChatBotMessage(
      "The information contained herein is not on real-time and for information purposes only the information may not be up to date and requires further validation from the school administrator.If you have further questions regarding in the app that can't answer your concerns, please do not hesitate to get in touch with the school administrator.", { withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  tuition = () => {
    const messages = this.createChatBotMessage(
      'There is no tuition fee in PUPBC.',
      { widget: 'tuition', withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  caepup = () => {
    const messages = this.createChatBotMessage(
      " If you are CAEPUP qualifiers and admitted to PUPBC Campus, you may submit your SAR Form and Application Form to PUP-Biñan Campus.",
      { widget: 'caepup', withAvatar: true });

    this.addMessageToBotState(messages);
  };

  courses = () => {
    const messages = this.createChatBotMessage(
      "Here is the list of course program offered in PUPBC.",
      { widget: 'courses', withAvatar: true });

    this.addMessageToBotState(messages);
  };

  puporg = () => {
    const messages = this.createChatBotMessage(
      "You can visit their facebook pages for more updates.",
      { widget: 'puporg', withAvatar: true });

    this.addMessageToBotState(messages);
  };

  returnee = () => {
    const messages = this.createChatBotMessage(
      "Sorry this can be answered by the campus registrar and this is a case to case basis depends on the reasons of a returnee students. You may ask our campus registrar about this concern.",
      { withAvatar: true });

    this.addMessageToBotState(messages);
  };

  puptransfer = () => {
    const messages = this.createChatBotMessage(
      "Sorry this can be answered by the campus registrar and depends on the different cases by the transferring students.",
      { withAvatar: true });

    this.addMessageToBotState(messages);
  };

  concern = () => {
    const messages = this.createChatBotMessage(
      "What are your concerns?",
      { widget: "concernOptions", withAvatar: true });

    this.addMessageToBotState(messages);
  };

  lost = () => {
    const messages = this.createChatBotMessage(
      "Lost ID is handled by Ms. Jurado as well as the lost registration certificate, but will be processed by the campus registrar. The loss of ID and COR (Certificate of Registration) needs to request an affidavit of loss to the municipality to notarize that will present a note to reprocess a new application for a new ID or COR. Requesting COR cost 150 pesos and need to present an affidavit of loss. TAKE NOTE: Printing of ID is free and it will happen in the main campus because the university president signatures are not allowed to be shared and must be on the main campus only.",
      { withAvatar: true });

    this.addMessageToBotState(messages);
  };

  nograde = () => {
    const messages = this.createChatBotMessage(
      "You might experience late encoding of grades by the professors especially those who have pre-requisite subjects or you have an INC grades.", { withAvatar: true });

    this.addMessageToBotState(messages);
  };

  inc = () => {
    const messages = this.createChatBotMessage(
      "Sorry I cant answer that for now. It depends on your professors in what you can do. Please ask them about your INC grade.", { withAvatar: true });

    this.addMessageToBotState(messages);
  };

  campusInfo = () => {
    const messages = this.createChatBotMessage(
      "Here are some information about the campus.", { widget: "campusOptions", withAvatar: true });

    this.addMessageToBotState(messages);
  };

  establish = () => {
    const messages = this.createChatBotMessage(
      "The PUP Biñan Campus was established and created through a Memorandum of Agreement (MOA) between the University and the City Government of Biñan in 2010.", { withAvatar: true });
    this.addMessageToBotState(messages);
  };

  webpage = () => {
    const messages = this.createChatBotMessage(
      "You can click the link below for more details.", { widget: "webpage", withAvatar: true });
    this.addMessageToBotState(messages);
  };

  location = () => {
    const messages = this.createChatBotMessage(
      "Polytechnic University of the Philippines - Binan Campus is located in Brgy. Zapote, City of Binan, Laguna. It is behind the Municipal Hall of Binan and Alonte Sports Arena.", { withAvatar: true });
    this.addMessageToBotState(messages);
  };

  admin = () => {
    const messages = this.createChatBotMessage(
      "Here is the list of all administrators in PUPBC.", { widget: 'admin', withAvatar: true });
    this.addMessageToBotState(messages);
  };

  president = () => {
    const messages = this.createChatBotMessage(
      "Dr. Manuel M. Muhi is our PUP President.", { widget: "president", withAvatar: true });
    this.addMessageToBotState(messages);
  };

  badwords = () => {
    const messages = this.createChatBotMessage(
      "Sorry, there was an error in your message. You are trying to use bad words. Try using '.help' command for your concerns. ", { withAvatar: true });
    this.addMessageToBotState(messages);
  };

  help = () => {
    const messages = this.createChatBotMessage(
      "Maybe I can help you with this 😉.", { widget: "help", withAvatar: true });
    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "Sorry, I don't quite understand that😢 Maybe you can use '.help' command.",
      {
        withAvatar: true,
      }
    );
    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;
