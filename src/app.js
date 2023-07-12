import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./Components/Register/Register";
import { useState } from "react";
import Home from "./Components/Home/Home";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={user && user._id ? <Home setLoginUser={setLoginUser} username={user.username}/> : <Login setLoginUser={setLoginUser}/>}
          />

          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
