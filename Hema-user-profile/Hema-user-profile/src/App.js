import { useState } from "react";
import UserProfile from "./UserProfile";
import "./App.css";

function App() {
  const [name, setName] = useState("John Doe");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <h1>User Profile Management</h1>

      <UserProfile name={name} />

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;