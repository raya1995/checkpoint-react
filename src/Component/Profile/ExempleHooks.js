import React ,{ useState,useEffect }from "react";


const ExempleHooks=()=>{
//HOOKS
const [count, setCount] = useState(0);
useEffect(()=>{
    document.title=`vous avez cliqué ${count} fois`;
  });


  return (
    
      
        <>
          <div>
          <div>
              <p>vous avez cliqué {count} fois</p>
            </div>
            <div>
           
        <button onClick={()=>setCount(count+1)}>Click if you want to count</button>
 
            </div>
          </div>
        </>
   
);
}
export default ExempleHooks;
