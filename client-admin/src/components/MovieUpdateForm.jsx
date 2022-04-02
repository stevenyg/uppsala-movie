
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
// import { fetchMovieForm } from '../store/actions';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { fetchMoviesDetail,fetchUpdateMovie } from '../store/actions';
import { useSelector } from 'react-redux';
import { useEffect} from 'react'

export default function MovieForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()

    const moviesDetail = useSelector(function(state){
        return state.moviesDetail
    })

    console.log(moviesDetail,"<<<<<<<<<");

    const [formInput,setFormInput] = useState({
        title:'',
        synopsis:'',
        trailerUrl:'',
        imageUrl:'',
        rating:0,
        GenreId:0,
        name1:'',
        profilePicture1:'',
        name2:'',
        profilePicture2:'',
        name3:'',
        profilePicture3:''
    })

    useEffect(()=>{
        dispatch(fetchMoviesDetail(id))
    },[])

    useEffect(()=>{
        if (moviesDetail) {
            setFormInput({
                title:moviesDetail.title,
                synopsis:moviesDetail.synopsis,
                trailerUrl:moviesDetail.trailerUrl,
                imageUrl:moviesDetail.imageUrl,
                rating:moviesDetail.rating,
                GenreId:moviesDetail.GenreId,
                name1:moviesDetail.Casts[0].name,
                profilePicture1:moviesDetail.Casts[0].profilePicture,
                name2:moviesDetail.Casts[1].name,
                profilePicture2:moviesDetail.Casts[1].profilePicture,
                name3:moviesDetail.Casts[2].name,
                profilePicture3:moviesDetail.Casts[2].profilePicture
            })
        }
    },[moviesDetail])

    const movieInputHandler = (e) =>{
        const {value,name} = e.target
        const newInput = {
            ...formInput,
        }
        newInput[name] = value
        setFormInput (newInput)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(fetchMoviesDetail(id))
        dispatch(fetchUpdateMovie(formInput,id,moviesDetail.Casts[0].id,moviesDetail.Casts[1].id,moviesDetail.Casts[2].id))
        .then(()=>{
            navigate('/MovieTable')
        })
    }


    return (
        <>       
            <div className='container'>
                <div className='d-flex justify-content-center'>
                <Form onSubmit={submitHandler}>
                <div>
                    <h1 className='py-5'> Add Movie </h1>
                    </div>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Title :</Form.Label>
                <Form.Control type="text" name="title" value={formInput.title} onChange={movieInputHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Synopsis :</Form.Label>
                <Form.Control type="text" name="synopsis" value={formInput.synopsis}  onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Trailer URL :</Form.Label>
                <Form.Control type="text" name="trailerUrl" value={formInput.trailerUrl} onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Image URL :</Form.Label>
                <Form.Control type="text" name="imageUrl" value={formInput.imageUrl} onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Rating :</Form.Label>
                <Form.Control type="text" name="rating" value={formInput.rating} onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>GenreId :</Form.Label>
                <Form.Control type="text" name="GenreId" value={formInput.GenreId} onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Cast Name 1 :</Form.Label>
                <Form.Control type="text" name="name1" value={formInput.name1} onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Profile Picture 1 :</Form.Label>
                <Form.Control type="text" name="profilePicture1" value={formInput.profilePicture1} onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Cast Name 2 :</Form.Label>
                <Form.Control type="text" name="name2" value={formInput.name2} onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Profile Picture 2 :</Form.Label>
                <Form.Control type="text" name="profilePicture2"  value={formInput.profilePicture2}  onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Cast Name 3 :</Form.Label>
                <Form.Control type="text" name="name3" value={formInput.name3} onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Profile Picture 3 :</Form.Label>
                <Form.Control type="text" name="profilePicture3"  value={formInput.profilePicture3}  onChange={movieInputHandler} required/>
            </Form.Group>
            
            
            <Button variant="warning" type="submit">
                Submit
            </Button>
        </Form>
                </div>
            </div>
      
        </>

    );
}
