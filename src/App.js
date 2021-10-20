import "./App.css";
import Mainbar from "./Components/Mainbar/Mainbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default App;
