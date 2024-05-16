import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Filosofy from "./pages/Filosofy";
import Finances from "./pages/Finances";
import Fitness from "./pages/Fitness";
import Config from "./pages/Config";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  
  return (
    <Router>
      <div className="bg-blue-100">
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/filosofia" element={<Filosofy />} />
            <Route path="/finanzas" element={<Finances />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/configuracion" element={<Config />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
