import "./App.css";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path="/homePage" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;