import React, { useEffect } from "react";

const Tuition = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);


  return (
    <div className='nobubble'>
 <p>In accordance to the REPUBLIC ACT No. 10931 which state as "AN ACT PROMOTING UNIVERSAL ACCESS TO QUALITY TERTIARY EDUCATION BY PROVIDING FOR FREE TUITION AND OTHER SCHOOL FEES IN STATE UNIVERSITIES AND COLLEGES, LOCAL UNIVERSITIES AND COLLEGES AND STATE-RUN TECHNICAL-VOCATIONAL INSTITUTIONS, ESTABLISHING THE TERTIARY EDUCATION SUBSIDY AND STUDENT LOAN PROGRAM, STRENGTHENING THE UNIFIED STUDENT FINANCIAL ASSISTANCE SYSTEM FOR TERTIARY EDUCATION, AND APPROPRIATING FUND."</p><br />
    <p> TAKE NOTE: A State university is with 0 fees 0 tuition meaning no payment
      transaction. If there are delinquent students who failed the units, automatic failing students
      have correspond status that can be found in the student handbook, but 0 tuition fee after
      admitted to the University.
    </p>
    </div>
  );
};

export default Tuition;