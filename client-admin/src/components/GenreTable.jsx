import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
// import { Link } from "react-router-dom";
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../store/actions';
import { useNavigate } from 'react-router-dom'
import { fetchGenreDetail,fetchDeleteGenre } from '../store/actions';

export default function MovieTable() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const genres = useSelector(function(state){
        return state.genres
    })
    useEffect(()=>{
        dispatch(fetchGenres())
    },[])

    const updateHandler = (id) =>{
        dispatch(fetchGenreDetail(id))
        navigate('/GenreForm')
    }

    const deleteHandler = (id) =>{
        dispatch(fetchDeleteGenre(id))
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
                        
                                <Button className="mt-1" variant="outline-dark" onClick={()=>updateHandler(genre.id)}>Update</Button>
                         
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