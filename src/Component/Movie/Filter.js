import React, { useState } from "react";
import movies from "../Movie/MovieList";
import MovieCardExample from "../MovieCard/MovieCard";
import "./Movie.css";

var variable = "titre";

export default function Filter({match}) {


  const [search, setSearch] = useState(""); // 

   console.log(search)

  console.log(match)

  const [MoviesList, setMoviesList] = useState(movies);


  console.log("movie list", MoviesList);

  return (
   <>
  

     <div className="movies-container">

      {/* <form inline>

      <input type="text" id="input" placeholder="Search"  onChange={(e) => setSearch(e.target.value)}  className="mr-sm-3" />
     
      </form>
 */}

        {
          console.log(variable),
        
        MoviesList?.map((e, i) => {


          

         
       // if(e.titre==search || e.rate==search){
          
          return (
            <>
              <div>
                <MovieCardExample key={i} movie={e} />
              </div>
            </>
          );
       // }
       
        })
        
        }
      </div>
      
    
    </>
  );
 
}
