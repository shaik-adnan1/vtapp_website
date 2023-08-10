import logo from "./logo.svg";
import "./App.css";
import Navigation from "./routes/navigation/navigation.route";
import { Route, Routes } from "react-router-dom";
import Events from "./routes/events/event.route";
import Home from "./routes/home/home.route";
import SignIn from "./routes/sign-in/signin.component";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='Events' element={<Events />} />
      {/* <Route path='sign-in' element={<SignIn />} /> */}
    </Routes>
  );
}

export default App;
