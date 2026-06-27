import Footer from "./components/Footer";
import Index from "./components/Index";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col min-h-full">
      <NavBar />
      <main className="flex-1">
        <Index />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
