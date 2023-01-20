import React, { useEffect } from "react";

const Administration = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);


  return (
    <div className='nobubble'>
      <h4>PUPBC Administrators</h4><br />
      <h4>Dr. Margarita Sevilla</h4> <p>Campus Director</p><br />
      <h4>Ms. Cheryl Joyce Jurado</h4><p> Head of PUPBC Student Affairs and Services</p><br />
      <h4>Ms. Jocelyn Q. Quinto</h4><p>Campus Registrar</p><br />
      <h4>Ms. Maria Gemelyn S. Austria </h4><p>Head of Academic Programs</p><br />
      <h4>Mr. Manolo David Rivera</h4><p>Collecting and Disbursing Officer</p><br />
      <h4>Ms. Francheska Montanez</h4><p>Campus Librarian</p><br />
      <h4>Ms. Widonna Cuenca</h4><p>Admin Staff</p><br />
      <h4>Engr. Jan Maravilla</h4><p>Admin Staff</p>
    </div>
  )
};

export default Administration;