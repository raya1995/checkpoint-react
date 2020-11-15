import React, { useState } from "react";
import movies from "../Movie/MovieList";
import MovieCardExample from "../MovieCard/MovieCard";
import "./Movie.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
var variable = "";
export default function Filter() {
  const [MoviesList, setMoviesList] = useState(movies);
  const [Movies, setMovie] = useState({
    titre: "",
    description: "",
    posterUrl: "",
    rate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...Movies, [name]: value });
  };
  const handleSubmit = () => {
    setMoviesList([Movies, ...MoviesList]);
    setMovie({ titre: "", description: "", posterUrl: "", rate: "" });
  };
  console.log("movie list", MoviesList);
  return (
    <div className="container">
      <Form>
        <FormGroup>
          <Label for="titre">titre</Label>
          <Input
            type="titre"
            name="titre"
            id="titre"
            onChange={handleChange}
            value={Movies.titre}
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="description"
            name="description"
            id="description"
            value={Movies.description}
            onChange={handleChange}
            placeholder="description placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="posterUrl">PosterUrl</Label>
          <Input
            type="posterUrl"
            name="posterUrl"
            id="posterUrl"
            value={Movies.posterUrl}
            onChange={handleChange}
            placeholder="posterUrl placeholder"
          />
        </FormGroup>

        <FormGroup>
          <Label for="rate">rate</Label>
          <Input
            type="rate"
            name="rate"
            value={Movies.rate}
            onChange={handleChange}
            id="exampleSelect"
          />
        </FormGroup>

        <button type="button" className="btn-danger" onClick={handleSubmit}>
          Submit
        </button>
      </Form>

      <div className="movies-container">
        {MoviesList?.map((e, i) => {
        if(e.titre==variable || e.rate==variable){
          return (
            <>
              <div>
                <MovieCardExample key={i} movie={e} />
              </div>
            </>
          );
        }
        })}
      </div>
      
    </div>
  );
}
