"use client";
import Footer from "./components/Footer";
import Index from "./components/Index";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col min-h-full">
      <main className="flex-1">
        <NavBar />
        <Index />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
