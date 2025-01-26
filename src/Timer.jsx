import { useEffect , useState } from "react";
import { data } from "./data";
import "./Timer.css";
import logo from './cookie.jpg'
import Data from "./Data";



export default function Timer(){

const [count,setcount] = useState(0);   
const [count1,setcount1] = useState(0);
const [cookie,setcookie]= useState(0);
const [cps,setcps] = useState (1);

useEffect(() => {

  const myInterval = setInterval(() => {
    setcount((currentCount) => {
      return currentCount + cps;

    });
  }, 1000);

  return () => {
    clearInterval(myInterval);
  };

}, [cps]);

function handle(){
  setcount(() => {return count + cps });
  setcount(() => {return count + item.increase });

}
function clearcookie(){

  setcount(() => {return count - count });
}



return (
  <div>
  
    <p className="my-cookie">{count}</p>
    <div className="cookie-show">
    <p className="cps">CPS :{cps} </p>
    <img src={logo} alt="Logo" className="cookie-buy-button" onClick={()=>{setcount(() => {return count + cps });}}/>
    <button className="resetbutton" onClick={clearcookie}>Reset</button>
    </div>
 
    <center>
    {data.map((item)=> 
    
   
      <div className="cookie"  key = {item.id}>
     <h4 >{item.name}</h4> 
     <p>{item.increase} Cps</p>
     <p> {item.cost} £</p>
     <button className="buybutton" onClick={()=> {if(count<item.cost){
            alert("Not enough money!");

     } else if (count>= item.cost){
        setcps(() => {return cps + item.increase });
        setcount(() => {return count - item.cost });}}}>Buy</button>
      </div>
      
      
    ) 
  }

</center>
  </div>
);
}