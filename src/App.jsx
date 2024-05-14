import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Wedding from "./pages/Wedding.jsx";
import Navigation from "./components/Navigation.jsx";
import RestaurantsAndShops from "./pages/RestaurantsAndShops.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/restaurants-and-shops" element={<RestaurantsAndShops />} />
      </Routes>
    </Router>
  );
}

export default App;
