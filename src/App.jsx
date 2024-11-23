
import './App.css'
import Cover from './components/Cover'
import  Row  from './components/Row'
import requests from './request'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navigationbar';

function App() {
 

  return (
    <>
    <Navigationbar/>
      <Cover fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster="true" title='Trending' fetchurl={requests.fetchTrending}/>  
      <Row title='netflixoriginals' fetchurl={requests. fetchNetflixOriginals}/>    
      <Row title='Top Rated' fetchurl={requests.fetchTopRated}/>  
      <Row title='Action' fetchurl={requests. fetchActionMovies}/>  
      <Row title='Comedy' fetchurl={requests. fetchComedyMovies}/>  
      <Row title='Horror' fetchurl={requests. fetchHorrorMovies}/>  
      <Row title='Romance' fetchurl={requests.fetchRomanceMovies}/>  
      <Row title='Documentaries' fetchurl={requests.fetchDocumentaries}/>  
     
    </>
  )
}

export default App
