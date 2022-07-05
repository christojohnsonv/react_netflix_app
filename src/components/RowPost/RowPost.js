import React, { useEffect, useState } from 'react'
import './RowPost.css'
import instance from '../../axios'
import { defaultPoster, imageUrl } from '../../constants/constants'
// discover/tv?api_key={API_KEY_HERE}&with_networks=213

// `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.\
//       desc&include_video=false&page=1&with_genres=${28}`




function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    instance.get(
      `${props.url}`).then(response=>{
        setMovies(response.data.results)
        console.log(response.data.results)
      })
  }, [])
  
  return (
    <div className='row'>
        <h1 className='title'>{props.title}</h1>
        <div className="posters">
          {movies.map((obj)=>
          <img key={obj.id} className={props.isSmall ? 'smallPoster' : 'poster'} src={ obj.backdrop_path ? `${imageUrl+obj.backdrop_path}` : `${defaultPoster}` } alt="Poster Loading..." />
          )}
        
        </div>
    </div>
  )
}

export default RowPost