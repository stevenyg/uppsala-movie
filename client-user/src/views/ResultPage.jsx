import CustomNavbar from "../components/CustomNavbar"
import CustomCard from '../components/CustomCard';


export default function ResultPage(){
    return (
        <>
            <CustomNavbar></CustomNavbar>

            <div className="container bg-light">
             <CustomCard></CustomCard>
             <CustomCard></CustomCard>
             <CustomCard></CustomCard>
             <CustomCard></CustomCard>
            </div>
        </>
    )
}