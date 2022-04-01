
import CustomNavbar from '../components/CustomNavbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchRegister } from '../store/actions';
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [registerInput,setRegisterInput] = useState({
        email:'',
        password:'',
        phoneNumber:'',
        address:''
    })

    const registerInputHandler = (e) =>{
        const {value,name} = e.target
        const newInput = {
            ...registerInput,
        }
        newInput[name] = value
        setRegisterInput (newInput)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(fetchRegister(registerInput))
        navigate('/login')
    }

    return (
        <>
                <CustomNavbar></CustomNavbar>
                <div className='container'>
                    <div className='d-flex justify-content-center mt-5'>
                
                <Form onSubmit={submitHandler}>
                <div>
                    <h1 className='py-5'> Register </h1>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address :</Form.Label>
                        <Form.Control type="email"  name="email" onChange={registerInputHandler}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password :</Form.Label>
                        <Form.Control type="password"   name="password" onChange={registerInputHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number :</Form.Label>
                        <Form.Control type="text"    name="phoneNumber" onChange={registerInputHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address :</Form.Label>
                        <Form.Control type="text"   name="address" onChange={registerInputHandler} />
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
