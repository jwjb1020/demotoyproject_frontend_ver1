import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { isLoggedInState } from '../recoilState';


export default function MyButton() {
    const goToSignUpPage = useNavigate();

    const isLogin = useRecoilValue(isLoggedInState)
    const resetLogin = useResetRecoilState(isLoggedInState);
   

    return (
        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        onClick={()=>{goToSignUpPage("/login")}}>
           {isLogin===true ?  "logOut": "SignUp/SingIn"}
        </button>

    )
}
