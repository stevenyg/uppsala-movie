
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import { fetchMovieForm } from '../store/actions';
import {useState} from 'react'

export default function MovieForm() {

    const dispatch = useDispatch()

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
        dispatch(fetchMovieForm(formInput))
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
                <Form.Control type="text" name="title" onChange={movieInputHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Synopsis :</Form.Label>
                <Form.Control type="text" name="synopsis" onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Trailer URL :</Form.Label>
                <Form.Control type="text" name="trailerUrl" onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Image URL :</Form.Label>
                <Form.Control type="text" name="imageUrl" onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Rating :</Form.Label>
                <Form.Control type="text" name="rating" onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>GenreId :</Form.Label>
                <Form.Control type="text" name="GenreId" onChange={movieInputHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Cast Name 1 :</Form.Label>
                <Form.Control type="text" name="name1" onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Profile Picture 1 :</Form.Label>
                <Form.Control type="text" name="profilePicture1" onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Cast Name 2 :</Form.Label>
                <Form.Control type="text" name="name2" onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Profile Picture 2 :</Form.Label>
                <Form.Control type="text" name="profilePicture2" onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Cast Name 3 :</Form.Label>
                <Form.Control type="text" name="name3" onChange={movieInputHandler} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Profile Picture 3 :</Form.Label>
                <Form.Control type="text" name="profilePicture3" onChange={movieInputHandler} required/>
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
