import CustomNavbar from "../components/CustomNavbar"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {  Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchMovies } from "../store/actions";
// import { fetchMoviesDetail } from "../store/actions";

export default function ResultPage(){
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const {search} = useParams()
    console.log(search);
    const movies = useSelector(function(state){
        return state.movies
    })

    useEffect(()=>{
        dispatch(fetchSearchMovies(search))
      },[])
    
    // const moviesDetailHandler = (slug,id) =>{
    //     dispatch(fetchMoviesDetail(slug,id))
    // }
    
    return (
        <>
            <CustomNavbar></CustomNavbar>

            <div className="container bg-light">
            {
             movies.map(movie => {
                 return (
                <div key={movie.id} className='container mt-3 rounded'>
                <Card className='mt-5'>
                    <Card.Header className='bg-warning'>{movie.title}</Card.Header>
                    <Card.Body>
                        {/* <Card.Title></Card.Title> */}
                        <Card.Text>
                        {movie.synopsis}
                        </Card.Text>
                        <Link to={`/detail/${movie.slug}/${movie.id}`} > 
                            <Button variant="warning">Movies Detail</Button>
                        </Link>
                    </Card.Body>
                </Card>
                </div>
                )
                })
            }
            </div>
        </>
    )
}