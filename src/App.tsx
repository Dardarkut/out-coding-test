import {  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/app.css';

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));

const App = () => {
  return (
    <Router>
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
      </Router>
  )
}

export default App
