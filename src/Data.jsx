import React, { useState, useEffect } from "react";

export default function Data() {


  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("Fetching items...");
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://cookie-upgrade-api.vercel.app/api/upgrades"
        );
        const data = await response.json();

        console.log("Data fetched successfully!");

        setItems(data);
        setMessage(
          `Fetched ${data.length} items successfully!`
        );
      } catch (error) {
        console.error("SIDE EFFECT!!!: Failed to fetch items!");
        setMessage("SIDE EFFECT!!!: Failed to fetch items!");
      }
    }
    fetchData();

  }, [refreshCount]);

 
  return(
    <div>
  {
    items.map((item)=> 
      
      <div key = {item.id}>
     <h1 >{item.name}</h1> 
     <p>{item.increase}</p>
     <p> {item.cost}</p>
     <button >buy cookie</button>

      </div>
      
      
    ) 
  }
  
    </div>
  )
}

