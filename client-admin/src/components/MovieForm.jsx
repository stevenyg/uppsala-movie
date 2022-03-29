
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function MovieForm() {
    return (
        <>       
            <div className='container'>
                <div className='d-flex justify-content-center'>
                <Form >
                <div>
                    <h1 className='py-5'> Add Movie </h1>
                    </div>
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
            <Form.Group className="mb-3">
            <Form.Select aria-label="Default select example">
            <Form.Label>Genre :</Form.Label>
            <option> </option>
                <option value="1">Action</option>
                <option value="2">Comedy</option>
                <option value="3">Thriller</option>
            </Form.Select>
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
