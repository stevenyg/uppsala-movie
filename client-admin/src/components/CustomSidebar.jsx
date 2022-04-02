import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function CustomSidebar() {
    return (
        <Nav className="col-md-12 d-none d-md-block sidebar"
        >   
            <div className="sidebar-sticky">
                <Nav.Item className="py-2 ">
                
                         <Link to="/MovieTable" className="text-center border btn btn-warning" > Show Movies </Link> 
                  
                </Nav.Item>
                <Nav.Item className="py-2">

                         <Link to="/MovieForm" className="text-center border btn btn-warning" > Add Movie </Link> 
               
                </Nav.Item>
                <Nav.Item className="py-2">
           
                         <Link to="/GenreTable" className="text-center border btn btn-warning" > Show Genres </Link> 
                  
                </Nav.Item>
               
                <Nav.Item className="py-2">
          
                         <Link to="/GenreForm" className="text-center border btn btn-warning" > Add Genre </Link> 
                    
                </Nav.Item>
            </div>
        </Nav>
    )
}