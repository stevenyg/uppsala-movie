import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {  Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { fetchSearchMovies } from '../store/actions';
import {useState} from 'react'

export default function CustomNavbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [searchInput,setSearchInput] = useState({
        search:'', 
    })

    const searchInputHandler = (e) =>{
        const {value,name} = e.target
        const newInput = {
            ...searchInput,
        }
        newInput[name] = value
        setSearchInput (newInput)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(searchInput);
        dispatch(fetchSearchMovies(searchInput))
        navigate('/result')
    }

    return (

        <Navbar className="py-3" style={{ backgroundColor: '#121212' }} expand="lg">
            <Container className="mw-100 d-inline-block" style={{ marginLeft: "0px" }} >
                <div className="row">
                    <div className="col-md-1">
                       <Link to="/"><Button variant="warning" className="font-weight-bold text-dark" >Umdb</Button></Link> 
                    </div>
                    <div className="col-md-10">
                        <Form onSubmit={submitHandler}>
                            <Form.Control
                                type="search"
                                placeholder="Search Umdb ( enter to search all )"
                                className="me-2"
                                aria-label="Search"
                                name="search"
                                onChange={searchInputHandler}
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