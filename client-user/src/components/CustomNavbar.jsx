import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




export default function CustomNavbar() {

    return (

        <Navbar className="py-" style={{ backgroundColor: '#121212' }} expand="lg">
            <Container className="mw-100 d-inline-block" style={{ marginLeft: "0px" }} >
                <div className="row">
                    <div className="col-md-1">
                        <Button variant="warning" className="font-weight-bold text-dark" >Umdb</Button>
                    </div>
                    <div className="col-md-10">
                        <Form>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                        </Form>
                    </div>
                 
                  
                </div>

                <Nav>



                </Nav>
            </Container>

        </Navbar>


    )

}