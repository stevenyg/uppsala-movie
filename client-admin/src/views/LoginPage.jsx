
import CustomNavbar from '../components/CustomNavbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import {useState} from 'react'
import { fetchLogin } from '../store/actions';
import {useNavigate} from 'react-router-dom'


export default function LoginPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginInput,setLoginInput] = useState({
        email:'',
        password:'',
    })

    const loginInputHandler = (e) =>{
        const {value,name} = e.target
        const newInput = {
            ...loginInput,
        }
        newInput[name] = value
        setLoginInput(newInput)
    }

    const goToHome = () =>{
        navigate('/')
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(fetchLogin(loginInput,goToHome))
       
    }
 

    return (
        <>
                <CustomNavbar></CustomNavbar>

                <div className='container'>
              
                <div className='d-flex justify-content-center mt-5'>
                       
                <Form onSubmit={submitHandler}>
                <div>
                    <h1 className='py-5'> Login </h1>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={loginInputHandler}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"  onChange={loginInputHandler}/>
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


