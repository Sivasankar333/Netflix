import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from '../instance';

function Row({title,fetchurl,isPoster}) {// object destructuring
    const[movies,setMovies]= useState([])
    console.log(isPoster);
    const base_url="https://image.tmdb.org/t/p/original/";
    //console.log(title,fetchurl);
    const fetchData = async () =>{  //async function to make the call to the API
        const response= await instance.get(fetchurl)
    //console.log(response.data.results);
    setMovies(response.data.results)
    }  
    console.log(movies);


    useEffect(()=>{
        fetchData()
    },[])
  return (
<div className='row'>
    <h1>{title}</h1>
    <div className='movie-row'>
       {
        movies.map(item=>(<img className='movie' src={`${base_url}${item.backdrop_path}`} alt="" />))
       }
        </div>
</div>
    )
}

export default Row