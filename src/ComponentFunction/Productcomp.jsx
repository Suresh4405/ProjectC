import React, { useState } from "react";
import Cardcomp from "./Cardcomp";

function Productcomp() {
  const [data, setData] = useState([
    {
      id: 1,
      title:"car",
      img: 'https://img.freepik.com/premium-psd/luxury-car-transparent-background-3d-rendering-illustration_494250-32501.jpg',
    },
    {
      id: 2,
      title:"maari",
      img: 'https://www.behindwoods.com/tamil-movies-cinema-news-16/images/dhanushs-official-statement-on-his-injury-at-maari-2-sets-photos-pictures-stills.jpeg',
    },
    {
      id:3,
      title:"tony",
      img:"https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg"
    },
   
  ]);

  return (
    <div>
      <h1>suresh pro ddd</h1>
      <br></br>
      {data.map((dd, index) => (
        <div key={index}>
          
          <Cardcomp  image={dd.img} tit={dd.title}/>

        </div>
      ))}
    </div>
  );
}

export default Productcomp;
