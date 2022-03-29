
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function MovieCastForm() {
    return (
        <>
        <div className='container'>
            <div className='d-flex justify-content-center'>
            <Form >
            <div>
            <h1 className=''> Add Cast to Movie </h1>
             </div>
            <Form.Label className='mt-3' >Pick Cast</Form.Label>
            <Form.Group>            
            <Form.Select  aria-label="Pick Cast">
                <option>Select Cast</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            </Form.Group>
            <Form.Label className='mt-3' >Pick Cast</Form.Label>
            <Form.Group>            
        
            <Form.Select aria-label="Pick Cast">
                <option>Select Cast</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            </Form.Group>
            <Form.Label className='mt-3' >Pick Cast</Form.Label>
            <Form.Group>            
           
            <Form.Select aria-label="Pick Cast">
                <option>Select Cast</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            </Form.Group>

            <Button className='mt-3' variant="warning" type="submit">
                Submit
            </Button>
        </Form>
            </div>
        </div>

        
        </>
    );
}
