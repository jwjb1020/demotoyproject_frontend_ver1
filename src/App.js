import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from './views/MainPage';
import SignInAddSignUpPage from './views/SignInAndSignUpPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<SignInAddSignUpPage />} />
    </Routes>
  );
}

export default App;
