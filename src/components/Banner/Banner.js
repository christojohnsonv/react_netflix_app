import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../../axios'
import { apiKey , imageUrl} from '../../constants/constants'




function Banner() {
  const [movie, setMovie] = useState({title:"",name:""})
  // const [allMovie, setAllMovie] = useState([])
  // const [bannerNumber, setBannerNumber] = useState(0)

  useEffect(() => {
    instance.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      // setMovie(response.data.results[0])
      // setAllMovie(response.data.results)
      setMovie(response.data.results[0])
   
    })               
  }, [])

  // useEffect(() => {
  //   setMovie(allMovie[bannerNumber])
  //   setInterval(()=> {
  //     console.log("before set bannner number: ",bannerNumber)
  //     setBannerNumber(bannerNumber + 1);
  //     console.log("after set bannner number: ",bannerNumber)

  // }, 2000);
  // }, [bannerNumber])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? (movie.title ? movie.title :  movie.name): " "}</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : " "}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner