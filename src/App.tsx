import "./App.css";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import ClientsRegister from "./pages/ClientsRegister";
import Dashboard from "./pages/DashboardPage";
import Clients  from "./pages/Clients"
import Finance from "./pages/Finance"
import Employees from "./pages/Employees"
import PageEmp from "./pages/EmployeesPage"


import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path="/homePage" element={<Home/>}/>
          <Route path="/Client" element={<ClientsRegister/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Clients" element={<Clients/>}/>
          <Route path="/Finance" element={<Finance/>}/>
          <Route path="/Employees" element={<Employees/>}/>
          <Route path="/EmployeesPage" element={<PageEmp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;