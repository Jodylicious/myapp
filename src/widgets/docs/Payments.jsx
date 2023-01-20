import React, { useEffect } from "react";

const Payments = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);


  return (
    <div className='nobubble'>
      <p>Please follow  the instructions below:<br />
        <a href='https://web.facebook.com/HSASPUPBC/posts/for-your-information-you-may-pay-to-landbank-all-your-payables-to-pup-or-you-may/306832960710000/?_rdc=1&_rdr'>https://web.facebook.com/HSASPUPBC/posts/pfbid0t4N3SVPZf1mhfh93g84F3D8tDYSsRPGqTnHyZtxhwQCAkB615mtJQaGMqXQf1NhZl?_rdc=1&_rdr</a></p><br />
      <p>TAKE NOTE: No over the counter for payment transactions as of the moment. LANDBANK only is use for payment/online transaction. There are online transactions but they are not allowed in GCash.
      </p>
    </div>
  );
};

export default Payments;