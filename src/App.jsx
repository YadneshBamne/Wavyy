import { Navbar } from './Pages/Components/Navbar';
import { ManageTeam } from './Pages/Management/Manageteam';
import { Bookings } from './Pages/Bookings/Bookings';
import { Login } from "./Pages/Login/Login";
import { Calendarr } from "./Pages/Calendar/Calendar";
import { Register } from "./Pages/Register/Register";
import { Services } from './Pages/Services/Services';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
      <Routes>
        <Route path="/manage-team" element={<ManageTeam />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/calendar" element={<Calendarr />} />
        <Route path="/services" element={<Services />} />

        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}
