import Header from "../components/Header";
import Perks from "../components/Perks";
import Hero from "../components/Hero";
import About from "../components/About";
import Signup from "../components/Signup";

function Homepage() {
  return (
    <>
        <Header />
        <Perks />
        <Hero />
        <Signup/>
        <About />
    </>
  )
}

export default Homepage;