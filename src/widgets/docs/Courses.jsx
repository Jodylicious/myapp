import React, { useEffect } from "react";

const Courses = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);

  return (
    <div className='nobubble'>
      <div className='courses'>
        <p><h4>Academic Program offerings in PUP Biñan, Laguna (Campus) </h4></p>
        <ul className='courseBullet'>
          <li>Bachelor in Elementary Education (BEED)</li>
          <li>Bachelor of Science in Accountancy (BSA)</li>
          <li>Bachelor of Science in Business Administration major in Human Resource Management (BSBA-HRM)</li>
          <li>Bachelor of Science in Computer Engineering (BSCpE)</li>
          <li>Bachelor of Science in Industrial Engineering (BSIE)</li>
          <li>Bachelor of Science in Information Technology (BSIT)</li>
          <li>Bachelor of Secondary Education major in English (BSEDEN)</li>
          <li>Bachelor of Secondary Education major in Social Studies (BSEDSS)</li>
          <li>Diploma in Computer Engineering Technology (DCET)</li>
          <li>Diploma in Information Communication Technology (DICT)</li>
        </ul><br/>
        <p><h4>New Course Offered</h4></p>
        <ul><li>Bachelor of Science in Psychology</li></ul>
        <p>You can also visit our <a href='https://jodylicious.github.io/myapp/#/courses'>PUPBC Askolar</a> website for more information. </p>
      </div>
    </div>
  );
};

export default Courses;