import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// import for pages
import {
  Home,
  Curriculum,
  CoursePage,
  Designthinking,
  Businessplan,
  Projectmanagement,
  Finance,
  Problemsolving,
  Figmaprototyping,
} from "./Pages";

// import for components
import { Header, Footer } from "./Components";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="courses" element={<CoursePage />}>
            <Route path="designthinking" element={<Designthinking />} />
            <Route path="businessplan" element={<Businessplan />} />
            <Route path="projectmanagement" element={<Projectmanagement />} />
            <Route path="financemanagement" element={<Finance />} />
            <Route path="problemsolvingapproach" element={<Problemsolving />} />
            <Route path="prototypingwithfigma" element={<Figmaprototyping />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
