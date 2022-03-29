
import CustomNavbar from '../components/CustomNavbar';
import CustomSidebar from '../components/CustomSidebar';
import { Outlet } from "react-router-dom";

export default function HomePage(){
    return (
        <>
               <CustomNavbar></CustomNavbar>

               <div className='container-fluid mt-3 '>
                    <div className='row'>
                        <div className='col-md-2'>
                        <CustomSidebar></CustomSidebar>
                        </div>
                        <div className='col-md-10 border-left'>
                        <Outlet />
                    </div>
                    </div>
               </div>

  
        </>
    )
}