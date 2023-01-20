import React, { useEffect } from "react";

const Documents = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);


  return (
    <div className='nobubble'>

        <p><h4 className='chatTitle'>Office of the Student Affairs and Services Forms</h4><a href='https://docs.google.com/forms/d/e/1FAIpQLSfjNRQ7qpGlNJqq4S5dm77BjhuOSEkad1fuVMqg3Pxu-rIeEQ/viewform?usp=pp_url'>https://docs.google.com/forms/d/e/1FAIpQLSfjNRQ7qpGlNJqq4S5dm77BjhuOSEkad1fuVMqg3Pxu-rIeEQ/viewform?usp=pp_url</a></p><br />
        <p><h4 className='chatTitle'>Online Request Forms</h4><a href='https://docs.google.com/forms/d/e/1FAIpQLSe2agSc3Oh_AR7LqREp6Fhq3jBnmKHhICZoub5is6syVIBXPg/viewform?fbclid=IwAR0WlljF8QKP_26AWUWJM65SasR8v_pHzH_WoYGHLHMxsKHuECOuTGLxkr0'>https://docs.google.com/forms/d/e/1FAIpQLSe2agSc3Oh_AR7LqREp6Fhq3jBnmKHhICZoub5is6syVIBXPg/viewform?fbclid=IwAR0WlljF8QKP_26AWUWJM65SasR8v_pHzH_WoYGHLHMxsKHuECOuTGLxkr0</a></p><br />
        <p><h4>Here are the following procedures and requests forms from the Office of the Student Affairs and Services (OSAS) concerns and online transactions. </h4></p><br />
        <li>Requests will be INVALID if the steps are not followed and required attachments are not submitted or lacking. </li><br />
        <li>Transcript of Records, Certified True Copy of Grades, Certificate of Enrollment concerns and requests should be directly addressed to the Campus Registrar.</li><br />

        <p>You can also access here some documents and forms to print, <a href='https://www.pup.edu.ph/downloads/students/?fbclid=IwAR2tbl7k-IbDIxS-LOrgOd9Gi6ZgaQbsilmPiQVoA7BTWF9vjvuFtfCxwiQ'>Downloads for Students</a></p><br/>

        <p> Or you may contact the person in charge through:</p>
        <p>quintojocelyn10@yahoo.com.ph</p>
        <p>jqquinto@pup.edu.ph</p>
        <p>pupbinancampus@yahoo.com</p>
    </div>



);
};

export default Documents;