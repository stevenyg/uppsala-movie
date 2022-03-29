import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'


export default function CustomNavbar() {



    return (

        < Navbar className="bg-light" expand="lg" >
            <Container style={{ marginLeft: "0px" }}>
                <Navbar.Brand className="text-dark font-weight-bold" href="#home">Umdb</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-dark" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-dark" href="#home">Register</Nav.Link>
                        <Nav.Link className="text-dark" href="#home">Login</Nav.Link>
                        <Nav.Link className="text-dark" href="#home">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >


    )

}