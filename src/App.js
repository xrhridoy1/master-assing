
import { Route, Routes } from 'react-router';
import './App.css';
import Body from './components/Body/Body';
import NavBar from './components/NavBar/NavBar';
import BodyDetails from './components/BodyDetails/BodyDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='details/:userId' element={<BodyDetails />} />
      </Routes>
    </>
  );
}

export default App;
