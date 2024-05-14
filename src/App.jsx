import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Wedding from "./pages/Wedding.jsx";
import Navigation from "./components/Navigation.jsx";
import Events from "./pages/Events.jsx";
import RestaurantsAndShops from "./pages/RestaurantsAndShops.jsx";
import History from "./pages/History.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/restaurants-and-shops" element={<RestaurantsAndShops />} />
        <Route path="/events" element={<Events />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
