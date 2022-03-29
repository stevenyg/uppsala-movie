import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";

export default function CustomNavbar() {



    return (

        < Navbar className="bg-light" expand="lg" >
            <Container style={{ marginLeft: "0px" }}>
                <Navbar.Brand >
                <Link className="text-dark font-weight-bold"  to="/">Umdb Admin</Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       
                        <Nav.Link>
                            <Link className="text-dark" to="/register">Register</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="text-dark" to="/login">Login</Link>
                        </Nav.Link>
                        <Nav.Link className="text-dark" href="#home">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >


    )

}