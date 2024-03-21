// import React from 'react';
// import "./Payment.css";
// import image from "../../../src/assets/QR.jpg";
// const Payment = () => {
//   return (
//     <div className='pay'>
//         <div className="pay-img">
//         <img src={image}alt="" />
//         </div>
//       <div className="pay-link">
//         <p>After the payment please make sure that you have filled the form </p>
//         <a href="https://forms.gle/m9gRBfuvihBedzrT7"></a>
//       </div>
//     </div>
//   )
// }


// export default Payment
import React from 'react';
import "./Payment.css";
import image from "../../../src/assets/QR.jpg";

const Payment = () => {
  return (
    <div className='pay'>
      <div className="pay-img">
        <img src={image} alt="" />
      </div>
      <div className="pay-link">
        <h3>After the payment, please make sure that you have filled the form.</h3>
   
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdFcToXwvGLWJaJk-HHTmy10q6oxl2jXhovSNcG98pDyfIGTg/viewform?embedded=true" width="500" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  )
}

export default Payment;

