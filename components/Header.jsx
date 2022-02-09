import React from 'react';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-fluid">
          <Link href={`/contests/${this.props.contestId}`} passHref>
            <Navbar.Brand>{this.props.title}</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link href={`/contests/${this.props.contestId}`} passHref>
                <Nav.Link
                  className={this.props.active === "overview" ? "active" : ""}
                >
                  Overview
                </Nav.Link>
              </Link>
              <Link href={`/contests/${this.props.contestId}/rule`} passHref>
                <Nav.Link
                  className={this.props.active === "rule" ? "active" : ""}
                >
                  Rule
                </Nav.Link>
              </Link>
              <Link href={`/contests/${this.props.contestId}/submissions`} passHref>
                <Nav.Link
                  className={this.props.active === "submissions" ? "active" : ""}
                >
                  Submissions
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link className="btn btn-sm btn-outline-secondary" href="/">Top</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

export default Header