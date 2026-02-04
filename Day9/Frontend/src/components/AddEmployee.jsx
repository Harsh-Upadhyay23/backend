import { useState } from "react";
import useAddEmployee from "../utils/useAddEmployee";
import { useNavigate } from "react-router-dom";


const AddEmployee = () => {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [job_title, setJob_title] = useState("");
  const [age, setAge] = useState("");

  const addEmployee = useAddEmployee();

  function handleSubmit(e) {
    e.preventDefault();

    addEmployee({
      name,
      img,
      job_title,
      age
    });

    setName("");
    setImg("");
    setJob_title("");
    setAge("");
    navigate('/')
  }

  return (
    <div className="addEmployee">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Employee name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Enter Profile URL"
          value={img}
          onChange={e => setImg(e.target.value)}
        />

        <input
          placeholder="Enter Job Title"
          value={job_title}
          onChange={e => setJob_title(e.target.value)}
        />

        <input
          placeholder="Enter Employee Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />

        <button>Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
