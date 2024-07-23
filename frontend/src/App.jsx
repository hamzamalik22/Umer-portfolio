import React from "react";
import "./styles/style.css";
import Router from "./routes/Router";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <div>
          <main>
            <Sidebar />
            <div className="main-content">
              <Navbar />
              <Router />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
