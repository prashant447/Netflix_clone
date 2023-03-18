import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { FaPlay } from 'react-icons/fa';
// import { RiNetflixFill } from 'react-icons/Ri';


const imgUrl = 'https://image.tmdb.org/t/p/original'

const Card = ({img}) =>{
  return(
    <>
    <div className="card">
     <img src={img} alt="" />
    </div>
    </>
  )

}


const Row = ({title, arr}) =>{
           return(
            <>
              <div className='title'>
            <h1>{title}</h1>
              </div>


            <div className='row'>
              {
              arr && arr.map( (item, index) =>(

                  <Card key = {index} img = {`${imgUrl}/${item.poster_path}`}/>
                ))
              }

            
            </div>
            </>

           )
}



const Home = () => {
    const [upcoming, setUpcoming] = useState([])
    const [top, setTop] = useState([])
    const [popular, setPopular] = useState([])
    const [playing, setPlaying] = useState([])
    const [genres, setGenres] = useState([])

     const  getUpcoming = async() =>{
          // const res = await axios.get(`${url}/movie/${Upcoming}?apikey=${Api}`)
          const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=48cfe111b20d55bf63e5a498ececbf04&language=en-in&page=3`)
          setUpcoming(res.data.results)
          // console.log(res.data.results)

          
       }

       
     const   getTopRated = async() =>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=48cfe111b20d55bf63e5a498ececbf04&language=en-in&page=3`)
          setTop(res.data.results)

      
   }

   
   const  getPopular = async() =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=48cfe111b20d55bf63e5a498ececbf04&language=en-in&page=3`)
          setPopular(res.data.results)

    
 }


 
 const  getNowPlaying = async() =>{
  // const res = await axios.get(`${url}/movie/${Upcoming}?apikey=${Api}`)
  const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=48cfe111b20d55bf63e5a498ececbf04&language=en-in&page=3`)
  setPlaying(res.data.results)
  // console.log(res.data.results)

  
}

const  getGenere = async() =>{
  // const res = await axios.get(`${url}/movie/${Upcoming}?apikey=${Api}`)
  const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=48cfe111b20d55bf63e5a498ececbf04&language&language=en-US`)
  setGenres(res.data.genres)
  // console.log(res.data.genres)
  
  
}


     useEffect(() => {
       getUpcoming();
       getTopRated();
       getPopular();
       getNowPlaying();
       getGenere();
     }, [])
     
  return (
    <>
      <section className='home'>

        <div className="banner">  
       {/* {popular[4].poster_path && <img src={`${imgUrl}/${popular[4].poster_path}`} alt="" />} */}

          {/* <img src={`https://image.tmdb.org/t/p/original/${popular[4].poster_path}`} alt="" /> */}

          <div>
          {/* { popular[4] &&   <h1>{popular[4].original_title}</h1>}
     { popular[4] &&   <p>{popular[4].overview}</p>} */}

     
        {/* <button>Play</button>
        <button>Get Started  </button> */}
          </div>
          <img src="../src/Component/Home/2.jpg" alt=""/>



        </div>
      

        <Row title={'Upcoming'} arr ={upcoming}/>
        <Row title={'Top Rated'} arr ={top}/>
        <Row title={'Popular'} arr ={popular}/>
        <Row title={'Now Playing'} arr ={playing}/>
        
   

        <div className="genere">

{
  genres &&  genres.map( (item) =>{
    return(

      <Link  key = {item.id} to = {`https://api.themoviedb.org/3/genre/movie/list?api_key=48cfe111b20d55bf63e5a498ececbf04&language&language=en-US`}>{item.name}</Link>
    )
  
})
}

</div>
        
        
      </section>

     
    </>
  )
}

export default Home




