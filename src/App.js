import React from "react";
import "./App.css";

// components
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        {/* Sidebar */}
        {/* Feed */}
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
