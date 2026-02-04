import axios from "axios";

const useAddEmployee = () => {

  const addEmployee = async (employeeData) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/employee",
        employeeData
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return addEmployee;
};

export default useAddEmployee;
