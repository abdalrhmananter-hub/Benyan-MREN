
import {Routes,Route} from "react-router-dom"
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import TableDashboard from "../components/UI/TableDashboard/TableDashboard";
import FormDashboard from "../components/UI/CardStatus/FormDashboard/FormDashboard";
import Developers from "./Developers";
import { useState } from "react";
function Dashboard() {
  const [draft , setDraft] = useState(false);
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
          <Sidebar draft ={draft}  />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<StatusPage/>}/>

              <Route path="/users" element={<Users setDraft={setDraft}/>}> 
                <Route index element= {<TableDashboard name="User"/>}/>
                <Route path="add" element={<FormDashboard name="User" />}/>
              </Route>

              <Route path="/projects" element={<Projects setDraft={setDraft} />}>
                <Route index element={<TableDashboard name="Project"/>}/>
                <Route path="add" element={<FormDashboard/>}/>
              </Route>

              <Route path="/developers" element={<Developers setDraft={setDraft} />}>
                <Route index element={<TableDashboard name="Developer"/>}/>
                <Route path="add" element={<FormDashboard/>}/>
              </Route>
            </Routes>
          </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
