import CustomNavbar from '../components/CustomNavbar';
import CustomCarousel from '../components/CustomCarousel'
import CustomList from '../components/CustomList';
import CustomFeatureCarousel from '../components/CustomFeatureCarousel'

export default function HomePage(){

    

            return (
              <>
                <CustomNavbar></CustomNavbar>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <CustomCarousel></CustomCarousel>
                    </div>
                    <div className='col-md-4' >
                      <CustomList></CustomList>
                    </div>
                  </div>
                </div>
          
                <div className='container'>
                  <div className='row'>
                      <div className='col-md-12'>
                      <div className='container'>
                      <h2 className='text-warning font-weight-bold py-2'>Featured Today </h2>
                      <CustomFeatureCarousel ></CustomFeatureCarousel>
                      </div>
                      </div>
                     
                   
                  </div>
                </div>
              </>
            );
          
    
}