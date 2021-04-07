import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      {/* <a href="#">
      <h1> Ima Miru </h1>
      </a> */}
      <div class="footer-text">
        <h5 className="footer-h5">Developers :</h5>
      </div>
      <a class="footer-link" href="https://github.com/Nyheimh" target="blank">
      <i class="fa fa-github"></i> " &nbsp; Nyheim Hunter"
      </a>
      <a class="footer-link" href="https://github.com/Nyheimh" target="blank">
      <i class="fa fa-github"></i> " &nbsp; Irma Leandre"
      </a>
      <a class="footer-link" href="https://github.com/Nyheimh" target="blank">
      <i class="fa fa-github"></i> " &nbsp; Andri Rafti"
      </a>
      <a class="footer-link" href="https://github.com/Nyheimh" target="blank">
      <i class="fa fa-github"></i> " &nbsp; Jordan Montero "
      </a>
    </div>
  );
}

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