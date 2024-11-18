import "./App.css";
import Discover from "./components/Discover";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Main from "./components/Card/index";
import Testimonial from "./components/Testimonials";
import Accordian from "./components/Accordian";
import FindApartments from "./components/Apartments";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="box-border px-[2rem] font-sans-serif bg-[#fafaf9] ">
      <Home />
      <Logo />
      <Featured />
      <Discover />
      <Main />
      <Testimonial />
      <Accordian />
      <FindApartments />
      <Footer />
    </div>
  );
}

export default App;
