import { BrowserRouter, Routes, Route } from "react-router-dom";
import CraftClub from "./components/cozy-craft-club";
import { Analytics } from "@vercel/analytics/react"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
          <Route index element={<CraftClub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;