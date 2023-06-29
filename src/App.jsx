import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import EducationSection from "./components/Section/EducationSection/EducationSection";
import CookSection from "./components/Section/CookSection/CookSection";
import Main from "./components/Main/Main";
import DesignSection from "./components/Section/DesignSection/DesignSection";
import CommunitySection from "./components/Section/CommunitySection/CommunitySection";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/education" element={<EducationSection />}></Route>
          <Route path="/cook" element={<CookSection />}></Route>
          <Route path="/design" element={<DesignSection />}></Route>
          <Route path="/community" element={<CommunitySection />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
