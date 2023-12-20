import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-secondary text-black">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4 d-flex justify-content-center align-items-center">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="mailto:rochmanbambanges@upi.edu"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/warasyuk_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "green" }}
            href="https://Wa.me/+6281280600236"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="whatsapp" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/Rochman29/WarasYuk"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-black" href="https://mdbootstrap.com/">
          WarasYuk
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
