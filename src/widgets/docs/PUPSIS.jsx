import React, { useEffect } from "react";

const PUPSIS = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);


  return (
    <div className='nobubble'>
      <p >Click the link to access or login your PUPSIS account. <br/><a href='https://sisstudents.pup.edu.ph/'>https://sisstudents.pup.edu.ph/</a></p>
      <br />
      <p>Here's a student's guide on how to use the Student Information System.<br />
        <a href='https://www.youtube.com/embed/bYJWITVXMEc'>https://www.youtube.com/embed/bYJWITVXMEc</a></p>
    </div>
  );
};

export default PUPSIS;