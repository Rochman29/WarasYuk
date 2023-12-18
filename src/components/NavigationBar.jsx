import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then((result) => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Navbar variant="light" className="bgNav fixed-top">
        <Container>
          <div className="d-flex">
            <Navbar.Brand href="#" className="d-flex">
              <div className="logo-brand mx-2"></div>WarasYuk
            </Navbar.Brand>
          </div>
          <div className="d-inline-flex">
            <Nav>
              <Nav.Link className="link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="link" href="#meditation">
                Meditation
              </Nav.Link>
              <NavDropdown title={user?.displayName} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="link d-inline-flex flex-row nav-user"
                href="#home"
              >
                <div>
                  <img className="userPP" src={user?.photoURL} alt="" />
                </div>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
