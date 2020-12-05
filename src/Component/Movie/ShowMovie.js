import React from "react";
import movies from '../Movie/MovieList'
import {
    Card,
    CardImg,
 Container,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";
  import { Redirect,Link } from "react-router-dom";
  
var movieCard;

const ShowMovie = ({ props,match,history}) => {
  
  movies.map((movie,i)=>{

  if(movie.titre===match.params.id){
    
    movieCard=movie

    return movie;
 }
  })  
 console.log(match.params.id);
 console.log(movieCard);
 const goHome=()=>{

    return (<Redirect to={{pathname: '/Filter', state: '/Filter'}} />)
  }

 return(
     <>
     <center>
    <div style={{width:"270px", margin:"20px 0"}} >
    <Container fixed maxWidth="sm" align='center'>
        <CardImg top width="500px" height="250px" src={movieCard.posterUrl} alt="Card image cap" />
        
          <CardTitle tag="h5">{movieCard.titre}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {movieCard.description}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {movieCard.rate}
          </CardSubtitle>
        
    
   </Container>
    </div>
    <CardSubtitle tag="h6" className="mb-2 text-muted">
            {movieCard.Trailer}
          </CardSubtitle>
          <div className="nav-item">

         <Link to="/Filter" onClick={()=>goHome()} className="nav-link">Return</Link>

        </div>
    </center>
</>
);
}
export default ShowMovie;