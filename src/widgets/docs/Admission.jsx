import React from "react";
import AdmissionOptions from "../Options/GeneralOptions/AdmissionOptions";

const Admission = (props) => {

  return (
    <div className='nobubble'>
      <p><h4 className='chatTitle'> Applying Online</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=62'>https://osssac.pup.edu.ph/knowledgebase.php?article=62 </a></p><br />
      <p><h4 className='chatTitle'> Admission to PUP</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=61'>https://osssac.pup.edu.ph/knowledgebase.php?article=61 </a></p><br />
      <p><h4 className='chatTitle'> PUP iApply</h4><a href='https://www.pup.edu.ph/iapply/caepup'>https://www.pup.edu.ph/iapply/caepup </a></p><br />
      <p><h4 className='chatTitle'>Admission Criteria for CAEPUP</h4><a href='https://drive.google.com/file/d/1WNusy51XI-eXNZPg7zBfTV4nkpBThD6x/view'> https://drive.google.com/file/d/1WNusy51XI-eXNZPg7zBfTV4nkpBThD6x/view</a></p><br />
      <p><h4 className='chatTitle'>Re-Admission to PUP</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=67'> https://osssac.pup.edu.ph/knowledgebase.php?article=67</a></p><br />
      <p><h4 className='chatTitle'>Transfer Admission</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=66'> https://osssac.pup.edu.ph/knowledgebase.php?article=66</a></p><br />
      <p><h4 className='chatTitle'>Claiming e-Permit</h4><a href='https://osssac.pup.edu.ph/knowledgebase.php?article=63'> https://osssac.pup.edu.ph/knowledgebase.php?article=63</a></p><br />

      <AdmissionOptions actionProvider={props.actionProvider} />
    </div>
  );
};

export default Admission;
