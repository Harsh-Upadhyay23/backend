import AllEmployeeCard from "./AllEmployeeCard";
import useAllEmployee from "../utils/useAllEmployee";

const Body = () => {
    
  const data = useAllEmployee();

  if (data === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="appbody">
      {data.map((item) => (
        <AllEmployeeCard
          key={item._id}
          employee={item}
        />
      ))}
    </div>
  );
};

export default Body;
