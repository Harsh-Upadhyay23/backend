import { useState, useEffect } from "react";
import axios from "axios";

const useAllEmployee = (id) => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    axios
      .get(`http://localhost:3000/api/employee/${id}`)
      .then((res) => {
        setEmployee(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [id]);

  return { employee, loading };
};

export default useAllEmployee;
