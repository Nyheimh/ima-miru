import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <div clasName="footer">
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            {/* <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p> */}
          </MDBCol>
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