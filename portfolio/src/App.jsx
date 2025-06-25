import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
