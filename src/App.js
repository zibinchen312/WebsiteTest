import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Home />
      break
    case "/about":
      Component = <About />
      break
    case "/contact":
      Component = <Contact />
      break
  }
  return (
    <>
      <Navbar />
      <div className="container">{Component}</div>
    </>
  )
}

export default App;
