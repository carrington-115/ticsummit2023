import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import for pages
import { Home } from "./Pages";

// import for components
import { Header } from "./Components";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
