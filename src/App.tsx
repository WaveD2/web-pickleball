import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/commom/Loading";
import NotFound from "./pages/404";
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
