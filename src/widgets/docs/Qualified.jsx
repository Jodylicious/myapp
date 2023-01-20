import React, { useEffect } from "react";

const Qualified = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);

  return (
    <div className='nobubble'>
      <p><h4 className='chatTitle'> SAR-Form</h4><a href='https://docs.google.com/document/d/1l64hmfF2L7JeKQ4w6pmgkluEHfSfi87s/edit?fbclid=IwAR13GBTs4atAZQ7Se-078hy0zCbKIDVUWWcfwqqWr1EPa4U6wbFDwrv-FDM'>https://docs.google.com/document/d/1l64hmfF2L7JeKQ4w6pmgkluEHfSfi87s/edit?fbclid=IwAR13GBTs4atAZQ7Se-078hy0zCbKIDVUWWcfwqqWr1EPa4U6wbFDwrv-FDM
      </a></p><br />

      <p><h4 className='chatTitle'>Application Form</h4><a href='https://docs.google.com/document/d/1oQX_jaaLTc_I4awJt6Hs7OEO2EQk3FUY/edit?fbclid=IwAR10l-cFsnhVQFNeDMlmb_giM4hHl_fPkucMWIVKx9ipLhhel4DqdZV9ddU'>https://docs.google.com/document/d/1oQX_jaaLTc_I4awJt6Hs7OEO2EQk3FUY/edit?fbclid=IwAR10l-cFsnhVQFNeDMlmb_giM4hHl_fPkucMWIVKx9ipLhhel4DqdZV9ddU </a></p><br />
    </div>
  );
};

export default Qualified;