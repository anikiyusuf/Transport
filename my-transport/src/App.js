import Header from "./component/Header";
import Banner from "./component/Banner";
import Service from "./component/Service";
import About from "./component/About";
import Projects from "./component/Projects";
import Testimonial from "./component/Testimonial";
import WhyUs from "./component/WhyUs";
import Team from "./component/Team";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import Footer from "./component/Footer";
import "./App.scss"

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Service/>
     <About/>
     <Projects/>
     <Testimonial/>
     <WhyUs/>
     <Team/>
     <Contact/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
