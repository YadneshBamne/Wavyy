import { Navbar } from './Pages/Components/Navbar';
import { ManageTeam } from './Pages/Management/Manageteam';
import { Bookings } from './Pages/Bookings/Bookings';
import { Login } from "./Pages/Login/Login";
import Calendarr from './Pages/Calender/Calender';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import ServiceMenu from './Pages/Services/Services';
import ClientsList from './Pages/Clients/Clients';
import { Register } from "./Pages/Register/Register";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <main className="p-8">
        <ManageTeam />
      </main> */}
      <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/manage-team" element={<ManageTeam />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<ServiceMenu />} />
        <Route path="/clients" element={<ClientsList />} />
        <Route path="/calendar" element={<Calendarr />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}
