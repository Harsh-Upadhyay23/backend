import { useEffect } from "react";
import axios from "axios";

const useDeleteEmployee = (id) => {

  useEffect(() => {
    if (!id) return; // safety

    const deleteData = async () => {
      const res = await axios.delete(
        `http://localhost:3000/api/employee/${id}`
      );
      console.log(res);
    };

    deleteData();
  }, [id]);

};

export default useDeleteEmployee;
