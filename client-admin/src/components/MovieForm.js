
import Form from 'react-bootstrap/Form'

export default function MovieForm() {
    return (

        <Form className="d-flex justify-content-center mt-5">
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Title :</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Synopsis :</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Trailer URL :</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Image URL :</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Rating :</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Action</option>
                <option value="2">Comedy</option>
                <option value="3">Thriller</option>
            </Form.Select>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
}
