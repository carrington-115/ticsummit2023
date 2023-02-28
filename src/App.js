import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// import for pages
import { Home, Curriculum, CurriculumDashboard, CoursePage } from "./Pages";

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
          <Route path="course_dashboard" element={<CurriculumDashboard />}>
            <Route path=":courses" element={<CoursePage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
