import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer">
    <MDBFooter className="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
              <ul>
              <li className="list-unstyled">
                <a href="https://github.com/Nyheimh">Github</a>
                  {/* <a href="https://github.com/Nyheimh" className="icons-sm fb-ic ml-1"> */}
                  {/* <MDBIcon fab icon="github" /></a> */}
                  </li>
              <li className="list-unstyled">
                <a href="#!">Irma Github</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Andri Github</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/Jordanm96">Jordan Github</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/Jordanm96/ima-miru"> Ima Miru </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;