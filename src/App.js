import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SignupPage from "./components/SignupPage";
import CausesPage from "./components/CausesPage";
import DonationStepsPage from "./components/DonationStepsPage";
import Navbar from "./Navbar";
import LoginPage from "./components/LoginPage";
import VolunteerPage from "./components/VolunteerPage";

function App() {
  console.log(HomePage);
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/volunteer-signup" element={<SignupPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/causes" element={<CausesPage />} />
            <Route path="/donation-steps" element={<DonationStepsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
