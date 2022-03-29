import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {  Link } from "react-router-dom";

export default function CustomCard (){
    return (
        <>
        <div className='container mt-3 rounded'>
        <Card className='mt-5'>
            <Card.Header className='bg-warning'>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                 <Link to={'/detail/'+1} replace> <Button variant="warning">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        </div>
     
        </>
    )
}