
import Form from 'react-bootstrap/Form'

export default function MovieCastForm() {
    return (
        <Form className="d-flex justify-content-center mt-5">
            <Form.Label >Pick Cast to add</Form.Label>
            <Form.Select aria-label="Pick Cast">
                <option>Select Cast</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Form.Label >Pick Cast to add</Form.Label>
            <Form.Select aria-label="Pick Cast">
                <option>Select Cast</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Form.Label >Pick Cast to add</Form.Label>
            <Form.Select aria-label="Pick Cast">
                <option>Select Cast</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
