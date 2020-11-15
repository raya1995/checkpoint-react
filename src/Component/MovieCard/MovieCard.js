import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const MovieCardExample = ({ movie }) => {
  const { titre, description, posterUrl, rate } = movie;

  return (
    <div style={{width:"250px", margin:"20px 0"}}>
      <Card>
        <CardImg top width="250px" height="250px" src={posterUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{titre}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {description}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {rate}
          </CardSubtitle>
          <Button>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCardExample;
