import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPageLayout/LandingPage";
import LandingPageHome from "./Pages/LandingPageHome";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import ErrorPage from "./Auth/ErrorPage";
function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route exact path="/" element={<LandingPage />}>
          <Route path="/" element={<LandingPageHome />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
