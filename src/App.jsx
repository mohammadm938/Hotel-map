import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Components/Header/Header";
import LocationList from "./Components/LocationList/LocationList";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <LocationList />
    </div>
  );
}

export default App;
