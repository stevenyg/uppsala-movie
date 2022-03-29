import CustomNavbar from '../components/CustomNavbar';
import Button from 'react-bootstrap/Button';

export default function DetailPage(){
    return (
        <>
        <CustomNavbar></CustomNavbar>
        <div className='container'>
          <div className='row'>
          <h5 className='text-light'>Title :</h5>
          </div>
          <div className='row'>
            <div className='col-md-3' style={{Height:'auto',maxWidth:'400px'}}>
              <img 
                  className="w-100"
              src="https://www.ruparupa.com/blog/wp-content/uploads/2022/02/hdqwalls.jpg"  />
            </div>
            <div className='col-md-9'>
            <iframe width="800" height="400" src="https://www.youtube.com/embed/mqqft2x_Aa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className='row bg-warning rounded'>
          <div className='col-md-9 mt-3'>
            <Button variant="dark" className="mx-2">action</Button>
            <Button variant="dark" className="mx-2">thriller</Button>
            <Button variant="dark" className="mx-2">comedy</Button>
  
            <div className='container mt-3'>
            <p className='text-dark'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <span> </span>
            </div>
            <div className='d-flex py-3'>
           
            <h5 className='text-dark'>Cast :</h5>
            <Button variant="dark" className="mx-2">action</Button>
            <Button variant="dark" className="mx-2">thriller</Button>
            <Button variant="dark" className="mx-2">comedy</Button>
            </div>
       
          </div>
          <div className='col-md-3'>
         
          </div>
          </div>
        </div>
        </>
    )
}