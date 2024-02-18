import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Topbar } from "./components/topbar";
import { Navbar } from "./components/navbar";
import { OrderModal } from "./components/modals/order-modal";
import Footer from "./components/footer";
import Loading from "./Loading";

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <OrderModal />
        <header className="fixed w-full top-0 left-0">
          <Topbar />
          <Navbar />
        </header>
        <main className="mt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </Suspense>
  );
};

export default App;
