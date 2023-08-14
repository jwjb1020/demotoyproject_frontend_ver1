import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { isLoggedInState } from '../recoilState';
import { useCookies } from 'react-cookie';


export default function MyButton() {
    const goToSignUpPage = useNavigate();

    // const isLogin = useRecoilValue(isLoggedInState)
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    
    const checkCookie = ()=>{
        removeCookie("token");
        alert("로그아웃 되었습니다.");
    }

    return (
        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        onClick={()=>{cookies.token ? checkCookie() : goToSignUpPage("/login")}}>
           {cookies.token ?  "logOut": "SignUp/SingIn"}
        </button>

    )
}
