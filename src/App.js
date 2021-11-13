import "./App.css";
import Main from "./Main";
import Signup from "./Signup";
import Signin from "./Signin";
import NewPost from "./NewPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/Signin" element={<Signin />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/NewPost" element={<NewPost />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
