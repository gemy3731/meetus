import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import { Dashboard, Login } from "./pages";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>;
}

export default App;
