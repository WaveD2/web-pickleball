import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/commom/Loading";
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
