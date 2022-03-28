import Table from 'react-bootstrap/Table'



export default function CastTable() {
    return (
        <Table striped bordered hover>
            <thead className="bg-warning">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Profile Picture</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Spiderman</td>
                    <td>http://spiderman.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Batman</td>
                    <td>http://batman.com</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Iron Man</td>
                    <td>http://ironman.com</td>
                </tr>


            </tbody>
        </Table>
    )
}