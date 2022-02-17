import React from 'react';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap'

type Props = {
  contestId?: number;
  contestName?: string;
  active: string;
}

const Header = (props: Props) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <div className="container-fluid">
      <Link
        href={props.contestId ? `/contests/${props.contestId}` : "/"}
        passHref
      >
        <Navbar.Brand>
          {props.contestName ? props.contestName : "Home"}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        {
          props.contestId && (
            <Nav className="mr-auto">
              <Link href={`/contests/${props.contestId}`} passHref>
                <Nav.Link
                  className={props.active === "overview" ? "active" : ""}
                >
                  Overview
                </Nav.Link>
              </Link>
              <Link href={`/contests/${props.contestId}/rule`} passHref>
                <Nav.Link
                  className={props.active === "rule" ? "active" : ""}
                >
                  Rule
                </Nav.Link>
              </Link>
              <Link href={`/contests/${props.contestId}/submissions`} passHref>
                <Nav.Link
                  className={props.active === "submissions" ? "active" : ""}
                >
                  Submissions
                </Nav.Link>
              </Link>
            </Nav>
          )
        }
        <Nav className="ms-auto">
          <Nav.Link className="btn btn-sm btn-outline-secondary" href="/">Top</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header