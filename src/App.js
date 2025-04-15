import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <div className="w-full h-16 fixed bg-white shadow-md flex justify-between z-50">
        <div className="p-4">
          <span className="font-bold text-lg">Harshavardhan P</span>{" "}
          <span>Full Stack Developer</span>
        </div>
        <div>
          <ul className="flex justify-evenly gap-10 p-4">
            <li>Home</li>
            <li>About</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Push the content below the fixed navbar */}
      <div className="pt-20">
        <Home />
      </div>
    </div>
  );
};

export default App;
