import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col min-h-full">
      <NavBar />
      <main className="flex-1">hello here is the home page</main>
      <Footer />
    </div>
  );
};

export default Home;
