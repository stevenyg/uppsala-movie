
import Form from 'react-bootstrap/Form'

export default function CastForm() {
    return (
        <Form className="d-flex justify-content-center mt-5">
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Name :</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Profile Picture URL :</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
}
