import { Link, Outlet } from "react-router-dom"
import CustomNavbar from "./CustomNavbar"
import { useState } from "react"
import User from './User';
import Admin from './Admin';

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [sector, setSector] = useState('');

  let pageName = "";
  let pageComponent = <div></div>;
  if (sector == "admin") {
    pageName = "Admin Section"
    pageComponent = <Admin employees={employees} setEmployees={setEmployees} />
  } else if (sector == "user") {
    pageName = "User Section"
    pageComponent = <User employees={employees} setEmployees={setEmployees} />
  } else {
    pageName = "Assessment"
    pageComponent = <div></div>
  }
  return (
    <div>
      <CustomNavbar />
      <h1>Generation Thailand Home - {pageName}</h1>
      <button onClick={() => setSector('user')}>User</button>
      <button onClick={() => setSector('admin')}>Admin</button>
      {pageComponent}
    </div>
  )
}


export default Home