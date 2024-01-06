//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ExchangeHat from "./pages/ExchangeHat";
import RaffleHat from "./pages/RaffleHat";
import Contact from "./pages/Contact";

export default function App() {
  return (
    // used to have basename="/hatdraw-react/" when there were other versions but for now set it back to "/"
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exchange-hat" element={<ExchangeHat />} />
          <Route path="raffle-hat" element={<RaffleHat />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
     </BrowserRouter>
  );
  //could make the "*" send to 404 page
}

