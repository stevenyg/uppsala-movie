
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CustomNavbar from './components/CustomNavbar';
import MovieTable from './components/MovieTable';
// import CastTable from './components/CastTable';
import CustomSidebar from './components/CustomSidebar';
import './App.css'

function App() {
  return (

    <>
      <div className="App">
        {/* // NavBar */}

        <CustomNavbar></CustomNavbar>

        <Container className="mt-3" fluid={true}>
          <Row>
            <Col className="" md={3}>
              <CustomSidebar></CustomSidebar>

            </Col>
            <Col md={9}>
              <MovieTable></MovieTable>
              {/* <CastTable></CastTable> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>

  );
}

export default App;
