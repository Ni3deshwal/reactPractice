import "./App.css";
import A from "./Components/NestedChild/A";
import Auth from "./Components/RegUser/Auth";
import Navbar from "./Components/RegUser/Navbar";
import { useState } from "react";
import loginContext from "./Components/RegUser/LGNContext";
function App() {
  const [userDetails, setUserDetails] = useState({
    user: "Guest",
    loginStatus: false,
  });
  return (
    <div className="App">
      {/* <A /> */}
      <loginContext.Provider value={userDetails}>
        <Navbar />
        <Auth />
      </loginContext.Provider>
    </div>
  );
}

export default App;
