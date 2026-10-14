import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SpinnerRij from "./pages/components/SpinnerRij";

function App() {
  return (
    <Suspense fallback={<SpinnerRij />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
