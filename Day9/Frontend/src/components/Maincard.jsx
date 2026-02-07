import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Maincard = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  async function getdata() {
    const res = await axios.get(`http://localhost:3000/api/employee/${id}`);
    setInfo(res?.data?.data);
  }

  useEffect(() => {
    getdata();
  }, [id]);

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <img src={info.img} alt={info.name} />
      <h2>{info.name}</h2>
      <p>{info.job_title}</p>
      <p>Age: {info.age}</p>
    </div>
  );
};

export default Maincard;
