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
import SearchButton from './components/SearchButton';
import SearchPage from './views/SearchPage';
import DetailPage from './views/DetailPage';

function App() {
  return (
    
    <RecoilRoot >
      
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<SignInAddSignUpPage />} />
        <Route path='/search' element={<SearchButton/>}/>
        <Route path='/searchPage' element={<SearchPage/>}/>
        <Route path="/DetailPage" element={<DetailPage/>}/>
      </Routes>
    </RecoilRoot>
 
  );
}

export default App;
