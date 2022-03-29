
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function CastForm() {
    return (
        <>
        <div className='container'>
            <div className='d-flex justify-content-center'>
            <Form>
            <div>
                    <h1 className='py-5'> Add Cast </h1>
                    </div>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Name :</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Profile Picture URL :</Form.Label>
                <Form.Control type="text" />
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
