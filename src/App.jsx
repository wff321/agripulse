import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScanPlant from "./pages/ScanPlant";
import Irrigation from "./pages/Irrigation";
import Market from "./pages/Market";
import BottomNav from "./components/BottomNav";
import CropRecommendation from "./pages/CropRecommendation";

function App() {
  return (
    <BrowserRouter>
      <BottomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<ScanPlant />} />
        <Route path="/irrigation" element={<Irrigation />} />
        <Route path="/market" element={<Market />} />
        <Route path="/crops" element={<CropRecommendation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;