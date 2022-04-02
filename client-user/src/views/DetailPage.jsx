import CustomNavbar from '../components/CustomNavbar';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesDetail } from "../store/actions";

export default function DetailPage(){

  const dispatch = useDispatch()
  const {slug,id} = useParams()

  const moviesDetail = useSelector(function(state){
    return state.moviesDetail
  })

  const isLoading = useSelector(function(state){
    return state.isLoadingMoviesDetail
  })


  console.log(moviesDetail,'<<<<<');

  useEffect(()=>{
    dispatch(fetchMoviesDetail(slug,id))
  },[])

  if(isLoading || !moviesDetail.id ){
    return null
  }

    return (
        <>
        <CustomNavbar></CustomNavbar>

              <div className='container'>
              <div className='row'>
              <h5 className='text-light py-3'>Title : {moviesDetail.title}</h5>
              </div>
              <div className='row'>
                <div className='col-md-3' style={{Height:'auto',maxWidth:'400px'}}>
                  <img 
                      className="w-100"
                  src={moviesDetail.imageUrl} alt="" />
                </div>
                <div className='col-md-9'>
                <iframe width="800" height="400" src={moviesDetail.trailerUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
              <div className='row bg-warning rounded mt-5'>
              <div className='col-md-9 mt-3'>
                <Button variant="dark" className="mx-2">{moviesDetail.Genre.name} </Button>
      
                <div className='container mt-3'>
                <p className='text-dark'>
                {moviesDetail.synopsis} 
                </p>
                  <span> </span>
                </div>
                <div className='d-flex py-3'>
               
                <h5 className='text-dark'>Cast :</h5>
                  {
                  moviesDetail.Casts.map(cast=>{
                    return (
                      <Button key={cast.id} variant="dark" className="mx-2">{cast.name}</Button>
                    )
                  })
                }
                 
                  {/* <Button variant="dark" className="mx-2">{moviesDetail.Casts[1].name}</Button>
                  <Button variant="dark" className="mx-2">{moviesDetail.Casts[2].name}</Button> */}

                </div>
           
              </div>
              <div className='col-md-3'>
             
              </div>
              </div>
            </div>
       
        </>
    )
}