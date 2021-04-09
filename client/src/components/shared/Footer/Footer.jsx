import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        {/* <h5 className="footer-h5">Created by:</h5> */}
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/andri-rafti-770b49126/"
          target="blank"
        >
          {" "}
          Andri Rafti
          <i id="icon" className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/irma-leandre-660313154/"
          target="blank"
        >
          {" "}
          Irma Leandre
          <i id="icon" className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/jordanmontero96/"
          target="blank"
        >
          {" "}
          Jordan Montero
          <i id="icon" className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/nyheimhunter/"
          target="blank"
        >
          {" "}
          Nyheim Hunter
          <i id="icon" className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

// <MDBFooter className="footer">
// <MDBContainer fluid className="text-center text-md-left">
//   <MDBRow>
//     <MDBCol md="6">
//         <ul>
//         <li className="list-unstyled">
//           <a href="https://github.com/Nyheimh">Github</a>
//             {/* <a href="https://github.com/Nyheimh" className="icons-sm fb-ic ml-1"> */}
//             {/* <MDBIcon fab icon="github" /></a> */}
//             </li>
//         <li className="list-unstyled">
//           <a href="#!">Irma Github</a>
//         </li>
//         <li className="list-unstyled">
//           <a href="#!">Andri Github</a>
//         </li>
//         <li className="list-unstyled">
//           <a href="https://github.com/Jordanm96">Jordan Github</a>
//         </li>
//       </ul>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// <div className="footer-copyright text-center py-3">
//   <MDBContainer fluid>
//     &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/Jordanm96/ima-miru"> Ima Miru </a>
//   </MDBContainer>
// </div>
// </MDBFooter>
