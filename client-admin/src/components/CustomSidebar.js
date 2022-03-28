import { Nav } from 'react-bootstrap';


export default function CustomSidebar() {
    return (
        <Nav className="col-md-12 d-none d-md-block sidebar"
        >
            <div className="sidebar-sticky">
                <Nav.Item className="py-2 ">
                    <Nav.Link className="text-center border btn btn-warning">Show Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                    <Nav.Link className="text-center border btn btn-warning">Show Cast</Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                    <Nav.Link className="text-center border btn btn-warning">Add Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                    <Nav.Link className="text-center border btn btn-warning">Add Cast</Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    )
}