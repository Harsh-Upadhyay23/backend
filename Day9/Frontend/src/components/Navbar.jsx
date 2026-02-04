import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://i.pinimg.com/236x/8b/c7/cf/8bc7cf3258e586354c989a48672d479a.jpg"
          alt=""
        />
      </div>

       <NavLink to="/add-employee" className="addemployee">
        Add Employee
      </NavLink>

      <ul className="navlinks">
        <NavLink to="/">
        <li>Home</li>
        </NavLink>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
