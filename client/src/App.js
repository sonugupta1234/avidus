import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import AppToast from "./Components/common/AppToast";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <AppToast />
    </div>
  );
}

export default App;
