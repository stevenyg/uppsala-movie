import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'



export default function MovieTable() {
    return (
        <>
            <Table striped bordered hover>
                <thead className="bg-warning">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Synopsis</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Spiderman</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                        <td className="text-center">
                            <Button className="mt-1" variant="outline-dark">Add Cast</Button>
                            <Button className="mt-1" variant="outline-dark">Update</Button>
                            <Button className="mt-1" variant="outline-dark">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>

    )
}