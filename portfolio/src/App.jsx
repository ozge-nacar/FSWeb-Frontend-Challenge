import Skills from "./components/Skills";
import Profile from "./components/Profile";

import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
