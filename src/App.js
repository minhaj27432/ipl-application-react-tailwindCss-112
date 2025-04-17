import "./styles.css";
import Header from "./components/Header";
import Heros from "./components/Heros";
import HomePage from "./page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
