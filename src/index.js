import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
//import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));