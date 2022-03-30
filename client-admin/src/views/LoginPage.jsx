
import CustomNavbar from '../components/CustomNavbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function LoginPage() {

 

    return (
        <>
                <CustomNavbar></CustomNavbar>

                <div className='container'>
              
                    <div className='d-flex justify-content-center mt-5'>
                       
                <Form>
                <div>
                    <h1 className='py-5'> Login </h1>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"  />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  />
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


