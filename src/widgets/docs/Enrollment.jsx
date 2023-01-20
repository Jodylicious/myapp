import React, { useEffect } from "react";

const Enrollment = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);


  return (
    <div className='nobubble'>
      <p>Here's the link of how to enroll in PUP.</p>
      <a href='https://osssac.pup.edu.ph/knowledgebase.php?article=65'>https://osssac.pup.edu.ph/knowledgebase.php?article=65</a><br />
      <br /><p>If you are officially student of PUP Binan Campus, follow this step:</p>
      <p>1. Go to PUPSIS, login your account.</p>
      <p>2. Enroll in all the subjects allowed in your course per semester. </p>
      <p>3. Download the Slip Confirmation as your proof of online registration.</p>
      <p>4. You may now download your Certificate of Registration.</p><br />

      <p>If you can't enroll this semester, you might experience late encoding of grades by the professors or SIS issue. You may ask Sir Jan Maravilla for your enrollment concerns.</p><br/>
      
      <p>Students with petitioned subjects may now also enroll through online ACE.</p><br />
      <p><h4 className='chatTitle'>Online Ace Procedure</h4><a href='https://www.facebook.com/CSCPUPBN/posts/pfbid02cxw3fjyb48kvMGSAkNk6Z2hiuRWJTnf93xd3EdT9q116nLXku6rGThNytJ4qx28Yl'>https://www.facebook.com/CSCPUPBN/posts/pfbid02cxw3fjyb48kvMGSAkNk6Z2hiuRWJTnf93xd3EdT9q116nLXku6rGThNytJ4qx28Yl</a></p><br />
      <p>For inquiries and other enrollment related concerns, please contact Sir Jhun Maravilla at jjbmaravilla@pup.edu.ph</p>
    </div>
  );
};
  
export default Enrollment;