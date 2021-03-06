import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HamburgerSlider } from "react-animated-burgers";
import "./styles.css";

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }
  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar
          sticky="top"
          expand="sm"
          // className="justify-content-end"
          style={{
            boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
            backgroundColor: "white"
          }}
        >
          <Navbar.Brand className="logo">
            <img
              src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"
              width="35"
              height="48"
              className="d-inline-block align-top"
              alt="logo"
              // style={{ display: "hidden" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ borderColor: "white", padding: 0 }}
            children={
              <HamburgerSlider
                isActive={this.state.isActive}
                toggleButton={this.toggleButton}
                buttonColor="white"
                barColor="black"
                buttonWidth={30}
                style={{ padding: "4px 12px" }}
              />
            }
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              {this.props.navbarItems === undefined
                ? null
                : this.props.navbarItems.map((value, i) => (
                    <Nav.Item key={i}>
                      <Nav.Link
                        className="textColor"
                        href={value.href}
                        style={{
                          float: "right",
                          fontWeight: "bold",
                          color: "black",
                          padding: "14px 15px"
                        }}
                      >
                        {value.label}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default MyNavbar;
