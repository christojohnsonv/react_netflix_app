function Banner() {
  const [movie, setMovie] = useState({})
  const [bannerNumber, setBannerNumber] = useState(0)


  useEffect(() => {
    window.localStorage.setItem("cnt", "0");
    instance.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      setMovie(response.data.results[0])

      
      setInterval(()=> {
        console.log("=========================")
console.log(response.data.results)
        // setMovie(response.data.results[bannerNumber])
       // console.log(bannerNumber + 1)
       
        const k=parseInt(window.localStorage.getItem("cnt"))+1
       // setBannerNumber(k);

       if(k<20){
        setMovie(response.data.results[k])
        

        window.localStorage.setItem("cnt", k.toString());
        console.log(k.toString())
        console.log(movie)

       }else{
        window.localStorage.setItem("cnt", "0");
       }

        

    }, 2000);
    }) 
    console.log("uuu")
    
  }, [])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie.title ? movie.title  : movie.name}</h1>
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