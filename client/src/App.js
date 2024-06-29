import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

    </div>
  );
}

export default App;
