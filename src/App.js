import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from './views/MainPage';
import SignInAddSignUpPage from './views/SignInAndSignUpPage';
import {
  RecoilRoot,
} from 'recoil';
import SearchButton from './components/SearchButton';
import SearchPage from './views/SearchPage';

import AccomodationPage from './views/AccomodationPage';
import MyAcoMap from './components/MyAcoMap';

function App() {
  return (

    <RecoilRoot >

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<SignInAddSignUpPage />} />
        <Route path='/search' element={<SearchButton />} />
        <Route path='/searchPage' element={<SearchPage />} />

        <Route path="/AccomdationPage" element={<AccomodationPage />} />
        <Route path="/acoMap" element={<MyAcoMap />} />
      </Routes>
    </RecoilRoot>

  );
}

export default App;
