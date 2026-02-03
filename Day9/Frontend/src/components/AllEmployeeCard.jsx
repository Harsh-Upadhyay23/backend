// "name": "Harsh",
//   "img": "https://randomuser.me/api/portraits/men/45.jpg",
//   "job_title": "Frontend Developer",
//   "age": 26

import { useNavigate } from "react-router-dom";

const AllEmployeeCard = ({ employee }) => {
  const navigate = useNavigate();

  return (
    <div
      className="allemployeecard"
      onClick={() => navigate("/employee/"+ employee._id)}
    >
      <img src={employee.img} alt="" />
      <h1>{employee.name}</h1>
    </div>
  );
};

export default AllEmployeeCard;


