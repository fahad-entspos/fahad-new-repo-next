import "./App.css";
import Layout from "./Component/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Assets from "./Component/Assets";
import Sales from "./Component/Sales";
import Salescar from "./Component/Salescar";
import Calender from "./Component/Calender";
import Services from "./Component/Services"
import Message from "./Component/Message";
import Setting from "./Component/Setting";
import Logout from "./Component/Logout";
function App() {
  return (
    <>
  

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Assets" element={<Assets />}></Route>
            <Route path="/Sales" element={<Sales />}></Route>
            <Route path="/Salescar" element={<Salescar />}></Route>
            <Route path="/Calender" element={<Calender />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Message" element={<Message />}></Route>
            <Route path="/Setting" element={<Setting />}></Route>
            <Route path="/Logout" element={<Logout />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
