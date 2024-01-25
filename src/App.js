import "./App.css";
import { Home } from "./components/HomePage";
import NavbarSection from "./components/navbar/NavbarSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./components/userForm/LoginPage";
import SignupPage from "./components/userForm/SignupPage";
import Cart from "./components/cartPage/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/sign" element={<SignupPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
