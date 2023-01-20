import React, { useEffect } from "react";
import ModalImage from "react-modal-image";

const President = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);

  return (
    <div className='nobubble'>
      <ModalImage className='pres'
        small={"https://pbs.twimg.com/media/EQKE_RiVAAA_cCT.jpg"}
        large={"https://pbs.twimg.com/media/EQKE_RiVAAA_cCT.jpg"}
        hideDownload={true}
        alt="president"
      />
      <div className='pres-Info'><p>The Board of Regents voted in favor of Dr. Manuel M. Muhi as 13th President of the Polytechnic University of the Philippines. He is the incumbent Vice President for Academic Affairs (VPAA). <br />
        <br />Dr. Muhi, a licensed civil engineer, professional engineering manager and registered ASEAN engineer, is a proud alumnus of the university. He has since served the Sintang Paaralan in various capacities: as Chairperson of the Department of Civil Engineering, as Dean of the College of Engineering, and then as Vice President for Research, Extension, Planning and Development. During his stint as VPAA, he concurrently served as Executive Vice President.</p></div>
    </div>
  );
};

export default President;