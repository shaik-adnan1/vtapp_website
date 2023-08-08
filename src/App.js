import logo from './logo.svg';
import './App.css';
import Navigation from './routes/navigation/navigation.route';
import { Route, Routes } from 'react-router-dom';
import Events from './routes/events/event.route';
import Home from './routes/home/home.route';

function App() {
  return (
   
    <Routes>
      <Route index element={<Home />}/>
      <Route to='/Events' element={<Events />}/>

    </Routes>
   
  );
}

export default App;
