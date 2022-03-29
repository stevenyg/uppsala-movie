import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function CustomSidebar() {
    return (
        <Nav className="col-md-12 d-none d-md-block sidebar"
        >   
            <div className="sidebar-sticky">
                <Nav.Item className="py-2 ">
                    <Nav.Link >
                         <Link to="/MovieTable" className="text-center border btn btn-warning" > Show Movies </Link> 
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                <Nav.Link >
                         <Link to="/CastTable" className="text-center border btn btn-warning" > Show Cast </Link> 
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                <Nav.Link >
                         <Link to="/MovieForm" className="text-center border btn btn-warning" > Add Movie </Link> 
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                <Nav.Link >
                         <Link to="/CastForm" className="text-center border btn btn-warning" > Add Cast </Link> 
                    </Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    )
}