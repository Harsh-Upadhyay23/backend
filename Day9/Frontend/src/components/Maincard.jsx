// "name": "Harsh",
//   "img": "https://randomuser.me/api/portraits/men/45.jpg",
//   "job_title": "Frontend Developer",
//   "age": 26

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Maincard = () => {
    const {id}=useParams();
    const [info,setInfo]=useState("");
    async function getdata() {
         const data = await axios.get(`http://localhost:3000/api/employee/${id}`)
         setInfo(data?.data?.data)
    }
    useEffect(()=>{
     getdata();
    },[])

    if(info.length==0) return (
     <div> loading</div>
    )
    else
    return (
    <div>
    <div className="profile">
        <img src={info.img}alt="" />
    </div>
    </div>
  );
}

export default Maincard;
