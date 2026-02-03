import { useState,useEffect } from "react";
import axios from 'axios';

import React from 'react';

const useAllEmployee = () => {
  
    const [employee,setEmployee]=useState(null)

    async function getdata() {
        const data= await axios.get("http://localhost:3000/api/employee");
        setEmployee(data?.data?.data);
    }
    useEffect(()=>{
    getdata();
    },[])

    return employee;
}

export default useAllEmployee;
