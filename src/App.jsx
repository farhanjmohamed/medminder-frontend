import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Login } from "./Login";
import { Medication } from "./Medication";
import { MedicationNew } from "./MedicationNew";
import { ReminderNew } from "./ReminderNew";
import { Schedule } from "./Schedule";
import { Signup } from "./Signup";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/medication/new" element={<MedicationNew />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reminder/new" element={<ReminderNew />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
