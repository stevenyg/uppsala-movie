import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies,fetchDeleteMovie } from '../store/actions';

export default function MovieTable() {
    // const [movies,setMovies] = useState([]);
    const dispatch = useDispatch()
    const movies = useSelector(function(state){
        return state.movies
    })
    useEffect(()=>{
        dispatch(fetchMovies())
    },[])
    
    const deleteMovieHandler = (id) =>{
       dispatch(fetchDeleteMovie(id))
       dispatch(fetchMovies())
    }

  

    return (
        <>
            <Table striped bordered hover>
                <thead className="bg-warning">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Synopsis</th>
                        <th>Cast</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                    movies.map(movie => {
                        return (
                            <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.synopsis}</td>
                            <td>
                            {
                                movie.cast.map(e => {
                                    return (
                                        <span key={e.id}>{e.name} </span>
                                    )
                                })
                             }
                            </td>
                            <td className="text-center">
                                <Link to={'/CastForm/'+movie.id}>
                                 <Button className="mt-1" variant="outline-dark">Add Cast</Button>
                                </Link>
                                <Button className="mt-1" variant="outline-dark">Update</Button>
                                
                                <Button className="mt-1" variant="outline-dark" onClick={()=> deleteMovieHandler(movie.id)} >Delete</Button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </>

    )
}