import React, { useEffect, useState } from 'react'
import RowPost from './RowPost'
import instance from '../../axios'
import { apiKey } from '../../constants/constants'

// let moviesForCategoryUrl = `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.\
// desc&include_video=false&page=1&with_genres=${28}`

let categoriesListUrl = `genre/movie/list?api_key=${apiKey}&language=en-US`

function Posters() {
    const [categories, setCategories] = useState([])   
    useEffect(() => {
      instance.get(categoriesListUrl).then(response=>{
        setCategories(response.data.genres)
      })
    }, [])
     
  return (
    <div>
        <RowPost title='Netflix Originals' url={`discover/tv?api_key=${apiKey}&with_networks=213`}/>
        {categories.map((obj)=>
            <RowPost title={obj.name} 
                url={`discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.\
                desc&include_video=false&page=1&with_genres=${obj.id}`} 
            isSmall />

        )}

    </div>
  )
}

export default Posters