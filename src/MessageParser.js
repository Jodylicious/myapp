class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (
      lowerCase.includes("hello") ||
      lowerCase.includes("how are you")) {
      return this.actionProvider.greet();
    }

    if (lowerCase.includes('admission') ||
      lowerCase.includes("how to apply in pup") ||
      lowerCase.includes("how to claim epermit") ||
      lowerCase.includes("pup iapply")) {
      return this.actionProvider.admission();
    }

    if (
      lowerCase.includes("why i cant enroll") ||
      lowerCase.includes("how to enroll") ||
      lowerCase.includes("how to add subjects") ||
      lowerCase.includes("how to change my subjects") ||
      lowerCase.includes("how to use online ace") ||
      lowerCase.includes("online ace") ||
      lowerCase.includes("enrollment") ||
      lowerCase.includes("online ace") ||
      lowerCase.includes("enroll") ||
      lowerCase.includes("petitions")) {
      return this.actionProvider.enrollment();
    }

    if (
      lowerCase.includes("payment") ||
      lowerCase.includes("pay") ||
      lowerCase.includes("transactions") ||
      lowerCase.includes("how to pay in landbank") ||
      lowerCase.includes("landbank")) {
      return this.actionProvider.payments();
    }

    if (lowerCase.includes('pupsis') ||
      lowerCase.includes('sis')) {
      return this.actionProvider.payments();
    }
    if (lowerCase.includes("appointment")) {
      return this.actionProvider.appointment();
    }

    if (lowerCase.includes('tuition') ||
      lowerCase.includes('tuition fee')) {
      return this.actionProvider.tuition();
    }

    if (
      lowerCase.includes('caepup') ||
      lowerCase.includes('caepup qualified') ||
      lowerCase.includes('qualified')) {
      return this.actionProvider.caepup();
    }

    if (
      lowerCase.includes("courses") ||
      lowerCase.includes("courses offered") ||
      lowerCase.includes("programs offered") ||
      lowerCase.includes("course list")) {
      return this.actionProvider.courses();
    }

    if (
      lowerCase.includes("puporg") ||
      lowerCase.includes("pup org") ||
      lowerCase.includes("ibits") ||
      lowerCase.includes("yes") ||
      lowerCase.includes("piie") ||
      lowerCase.includes("aces") ||
      lowerCase.includes("hrss") ||
      lowerCase.includes("jpia") ||
      lowerCase.includes("pup organization") ||
      lowerCase.includes("organization") ||
      lowerCase.includes("org")) {
      return this.actionProvider.puporg();
    }

    if (lowerCase.includes("websites") ||
      lowerCase.includes("csc") ||
      lowerCase.includes("page") ||
      lowerCase.includes("pupbc fb page") ||
      lowerCase.includes("hsas") ||
      lowerCase.includes("pupbc community") ||
      lowerCase.includes("iskommunity") ||
      lowerCase.includes("pupbc official website") ||
      lowerCase.includes("pupbc official page")) {
      return this.actionProvider.webpage();
    }

    if (
      lowerCase.includes("pup establish") ||
      lowerCase.includes("when did the pup build") ||
      lowerCase.includes("what year did the pup established?") ||
      lowerCase.includes("establish")) {
      return this.actionProvider.establish();
    }

    if (
      lowerCase.includes("location") ||
      lowerCase.includes("where is pupbc located?") ||
      lowerCase.includes("pup binan location") ||
      lowerCase.includes("where is pup binan located?") ||
      lowerCase.includes("where is pup binan?")) {
      return this.actionProvider.location();
    }

    if (
      lowerCase.includes("how can i readmit again in pup") ||
      lowerCase.includes("want to re-admit in pupbc") ||
      lowerCase.includes("re-admit") ||
      lowerCase.includes("i want to study again in pupbc") ||
      lowerCase.includes("how can i go back studying in pupbc") ||
      lowerCase.includes("want to admit again in pupbc")) {
      return this.actionProvider.returnee();
    }

    if (lowerCase.includes('transfer') ||
      lowerCase.includes('transfer another pup branch')) {
      return this.actionProvider.puptransfer();
    }

    if (lowerCase.includes("concern")) {
      return this.actionProvider.concern();
    }

    if (
      lowerCase.includes("how can i request documents") ||
      lowerCase.includes("documents") ||
      lowerCase.includes("certificate") ||
      lowerCase.includes("how can i get certificates") ||
      lowerCase.includes("how to issue certificate of registration")) {
      return this.actionProvider.documents();
    }

    if (
      lowerCase.includes("how can i get another reg card?") ||
      lowerCase.includes("i lost my registration card") ||
      lowerCase.includes("i lost my reg card") ||
      lowerCase.includes("lost") ||
      lowerCase.includes("i lost my school id") ||
      lowerCase.includes("how can i issue new id?") ||
      lowerCase.includes("how can i get new id") ||
      lowerCase.includes("i lost my id")) {
      return this.actionProvider.lost();
    }


    if (
      lowerCase.includes("I have no grade in my subjects") ||
      lowerCase.includes("why i dont have grade yet") ||
      lowerCase.includes("no grade") ||
      lowerCase.includes("i dont have grades yet in my subject") ||
      lowerCase.includes("why i dont have any grades yet in my subjects") ||
      lowerCase.includes("how can i have my grades")) {
      return this.actionProvider.nograde();
    }

    if (
      lowerCase.includes("I have inc in my subjects") ||
      lowerCase.includes("I have an INC grade in my subjects") ||
      lowerCase.includes("what can i do to remove my inc grade") ||
      lowerCase.includes("why i have an inc grade") ||
      lowerCase.includes("inc") ||
      lowerCase.includes("how to change my inc grade")) {
      return this.actionProvider.inc();
    }

    if (lowerCase.includes("information") ||
      lowerCase.includes("campus")) {
      return this.actionProvider.campusInfo();
    }

    if (
      lowerCase.includes("pupbc admin") ||
      lowerCase.includes("administrators") ||
      lowerCase.includes("pupbc administators") ||
      lowerCase.includes("admins") ||
      lowerCase.includes("who are the administrators in pupbc") ||
      lowerCase.includes("school admins in pupbc")) {
      return this.actionProvider.admin();
    }

    if (
      lowerCase.includes("pup president") ||
      lowerCase.includes("president")) {
      return this.actionProvider.president();
    }

    if (lowerCase.includes("disclaimer")) {
      return this.actionProvider.disclaimer();
    }

    if (
      lowerCase.includes("fuck") ||
      lowerCase.includes("fuck u") ||
      lowerCase.includes("fuck you") ||
      lowerCase.includes("bitch") ||
      lowerCase.includes("shit") ||
      lowerCase.includes("gago") ||
      lowerCase.includes("tanginamo") ||
      lowerCase.includes("tarantado") ||
      lowerCase.includes("motherfucker") ||
      lowerCase.includes("tangina") ||
      lowerCase.includes("putangina")) {
      return this.actionProvider.badwords();
    }

    if (lowerCase.includes(".help")) {
      return this.actionProvider.help();
    }

//DEFAULT - response if none of the terms are called.
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
