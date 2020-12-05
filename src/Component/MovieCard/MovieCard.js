import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { withRouter} from "react-router-dom";

const MovieCardExample = (props) => {


  const{titre,description,rate,posterUrl}=props.movie;

console.log(props.match.url)
   
var str='/';

var k=str.concat(titre);
var m=props.match.url.concat(k);
 

console.log(props.movie)

  return (
    <div style={{width:"270px", margin:"20px 0"}} >
      <Card  onClick={()=> props.history.push(`${m}`)}>
        <CardImg top width="500px" height="250px" src={posterUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{titre}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {description}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {rate}
          </CardSubtitle>
          <Card>
          <button type="button" class="btn btn-outline-danger"  >Delete</button>
          </Card>
       
        </CardBody>
      </Card>
    </div>
  );
};

MovieCardExample.propTypes = {
  posterUrl: PropTypes.any,

 };

export default withRouter(MovieCardExample);
