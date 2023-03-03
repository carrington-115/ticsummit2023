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
  Apply,
  Instructions,
  Payments,
  ApplyForm,
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
          <Route path="apply" element={<Apply />}>
            <Route path="instructions" element={<Instructions />} />
            <Route path="application_fee" element={<Payments />} />
            <Route path="application_form" element={<ApplyForm />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
