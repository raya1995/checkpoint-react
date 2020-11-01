import React from "react";
import ProfilPhoto from "./ProfilPhoto";
//mport PropTypes form "prop-types";

const Profil =({profile,children}) => {
const handlename = () => alert(profile.fullname);
const styleObject={color:"red",textAlign:'center'}

    //const {fullname,bio,profession}=profile;
    const { fullname = "roua" ,bio="ok",profession='etudiante'} = profile;
    return (
    <div  style={styleObject} >
        <div>
<span>fullname: {fullname}</span>
        </div>
        <div>
<span>bio: {bio}</span>
        </div>
        <div>
<span>profession: {profession}</span>
        </div>
        <div>
            {children}</div>
        <a href="/" onClick={handlename}>
     Click me
   </a>
      
    </div>
    
   
    )};
export default Profil;