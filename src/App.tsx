import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Trainings from "./components/Trainings";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid p-0">
        <Profile />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Trainings />
      </div>
    </div>
  );
}

export default App;
