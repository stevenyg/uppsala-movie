
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchAddGenre } from '../store/actions';
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import { useEffect} from 'react'

export default function CastForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const genresDetail = useSelector(function(state){
    //     return state.genresDetail
    // })
    const [nameInput,setNameInput] = useState({
        name:'',
    })

    // useEffect(()=>{
    //     if (genresDetail) {
    //         setNameInput({
    //             name:genresDetail.name
    //         })
    //     }

    // },[genresDetail])

    // const [genreInput,setGenreInput] = useState(genresDetail)

    const genreInputHandler = (e) => {
        const {value,name} = e.target
        const newInput = {
            ...setNameInput,
        }
        newInput[name] = value
        setNameInput (newInput)
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(fetchAddGenre(nameInput))
        navigate('/GenreTable')
    }
    
    return (
        <>
        <div className='container'>
            <div className='d-flex justify-content-center'>
            <Form onSubmit={submitHandler}>
            <div>
                    <h1 className='py-5'> Add Genre </h1>
                    </div>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Genre :</Form.Label>
                <Form.Control type="text" name="name" value={nameInput.name} onChange={genreInputHandler} />
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
