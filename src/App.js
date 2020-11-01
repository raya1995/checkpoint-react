import React from "react";
import "./App.css";
import { Row, Col, Form, FormGroup, Button } from "shards-react";
import imageInSrc from "./Capture.PNG";
import "./style.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import Profile from "./Component/Profile/Profil";
import photo from "./Capture.PNG";
import { render } from "@testing-library/react";
import { Component } from "react";

class App extends Component {
  state = {
    profile: {
      fullName: "Rayaaa",
      bio: "okkkk",
      imgSrc: "",
      profession: "etudiante",
    },
    test: false,
    timerID: 0,
  };
  handleClick = () => this.setState({ test: !this.state.test });

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timerID: this.state.timerID + 1,
      });
    }, 1000);
  }

  /* componentWillUnmount() {
      clearInterval(this.timerID);
    }*/

  render() {
    const { test ,timerID} = this.state;
    return (
      <div>
        {test ? (
          <>
          <h1>{timerID}</h1>
            <div>{this.state.profile.fullName} </div>
            <div>{this.state.profile.bio} </div>
            <div>{this.state.profile.profession} </div>
            <img src={photo} className="imageInPublic" />
          </>
        ) : (
          <>
            <div>
              <div>
                <button onClick={this.handleClick}> state button </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
    /*return(
  <>

<div style={{border:'solid 1px black',maxwidth:'100vw'}}/>
<p className="titlered"  >Your name here</p>
<br></br>
<img src={imageInSrc} alt='Raya hadhri' height='200px'/>
<br></br>
<img src="/photo.jpg" className="imageInPublic" alt='Raya hadhri' height='200px'/>
<br></br>
<video width="320" height="240" controls>
 <source src="myVideo.mp4" type="video/mp4" />
</video>
</>
);*/
  }

  /* let firstName = "Raya";
    let lastName = "Hadhri";
    return (
      <React.Fragment>
      <div >
        <img src="/photo.jpg" className="my-profile" alt='Raya hadhri' height='200px'/>
        <p>
          {firstName} {lastName}
        </p>



        <p> Hello {firstName1 || "Anonymous"} </p>
<p> It looks like you {firstName1 ? "have" : "don’t have"} a name</p>
{!firstName1 && (
  <form>
    <p> Type your name here </p>
    <input type="text" />
  </form>
)}
      </div>





</React.Fragment>

    );*/

  /* return (
   <>
      <Form>
        <Col md="6" className="form-group">
          <label htmlFor="feFirstname">firstName</label>
          <input
            type="firstname"
            className="form-control"
            placeholder="Enter your firstName"
            required
          />
        </Col>

        <Col md="6" className="form-group">
          <label htmlFor="fePassword">LastName</label>
          <input
            type="lastname"
            className="form-control"
            placeholder="Enter your LastName "
            required
          />
        </Col>

        <Col md="6" className="form-group">
          <label htmlFor="feInputAddress">Address</label>
          <input
            type="address"
            className="form-control"
            placeholder="Enter your Address "
            required
          />
        
      </Col>
      <Col md="6" className="form-group">
          <label htmlFor="feInputAddress2">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email "
            required
          />
          </Col>
      


        
        
<center>
        <Button type="submit">Submit</Button></center>
      </Form>
   </>
  );}*/
}

export default App;
