import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from './views/MainPage';
import SignInAddSignUpPage from './views/SignInAndSignUpPage';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
   <div >
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<SignInAddSignUpPage />} />
      </Routes>
    </RecoilRoot>
    </div>
  );
}

export default App;
