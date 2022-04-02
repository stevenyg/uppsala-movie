import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../store/actions';
// import { useNavigate } from 'react-router-dom'
import { fetchDeleteGenre } from '../store/actions';

export default function MovieTable() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()

    const genres = useSelector(function(state){
        return state.genres
    })
    useEffect(()=>{
        dispatch(fetchGenres())
    },[])

    // const updateHandler = (id) =>{
    //     dispatch(fetchGenreDetail(id))
    //     .then(()=>{
    //         navigate('/GenreUpdateForm')
    //     })
    // }

    const deleteHandler = (id) =>{
        dispatch(fetchDeleteGenre(id))
        .then(()=>{
            dispatch(fetchGenres())
        })
    }

    return (
        <>
            <Table striped bordered hover>
                <thead className="bg-warning">
                    <tr>
                        <th>#</th>
                        <th>Genres Type </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                    genres.map(genre => {
                        return (
                            <tr key={genre.id}>
                            <td>{genre.id}</td>
                            <td>{genre.name}</td>
                            <td>
                                <Link to={'/GenreUpdateForm/'+ genre.id}>
                                <Button className="mt-1" variant="outline-dark" >Update</Button>
                                </Link>
                         
                                <Button className="mt-1" variant="outline-dark" onClick={()=>deleteHandler(genre.id)}  >Delete</Button>
                             
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