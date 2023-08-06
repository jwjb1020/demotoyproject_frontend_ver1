import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import { userUserStore } from '../stores';
import './SignInAndSignUpPage.css';

export default function SignInAddSignUpPage() {

    const [isSignUp, setIsSignUp] = useState(false);


    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [cookies, setCookies] = useCookies();
    const { user, setUser } = userUserStore();
    const [userName, setUserName] = useState("");
    const [userPasswordCheck, setUserPasswordCheck] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setIsSignUp(true);
        }, 3000);
    }, []);

    const handleToggle = () => {
        setIsSignUp(prevState => !prevState);
    };

    const SignInHandler = () => {
        if (userId.length === 0 || userPassword.length === 0) {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }

        const data = {
            userId,
            userPassword
        };

        axios.post("http://localhost:8080/api/auth/signIn", data, { withCredentials: true })
            .then((response) => {
                const responseData = response.data;
                console.log(responseData);
                if (!responseData.result) {
                    alert(responseData.message);
                    return;
                }
                alert(responseData.message);

                const { token, exprTime, userMember } = responseData.data;
                const expires = new Date();
                expires.setMilliseconds(expires.getMilliseconds() + exprTime);

                setCookies("token", token, { expires });
                setUser(userMember);
            })
            .catch((error) => {
                alert("로그인에 실패했습니다(data).");
            });
    };

    const SignUpHandler = () => {
        const data = {
            userId,
            userPassword,
            userPasswordCheck,
            userName
        };

        axios.post("http://localhost:8080/api/auth/signUp", data, { withCredentials: true })
            .then((response) => {
                const responseData = response.data;
                alert(responseData.message);
                console.log(response.data);
                console.log("연결성공");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div id="container" className={`container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
            <div className="row">
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-up">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <i className='bx bx-mail-send'></i>
                                <input type="text" placeholder="Id" onChange={(e) => setUserId(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Confirm password" onChange={(e) => setUserPasswordCheck(e.target.value)} />
                            </div>
                            <button onClick={() => SignUpHandler()} >회원가입</button>
                            <p>
                                <span>
                                    회원이신가요?
                                </span>
                                <b className="pointer" onClick={handleToggle}>
                                    Sign in here
                                </b>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col align-items-center flex-col sign-in">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-in">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Id" onChange={(e) => { setUserId(e.target.value) }} />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" onChange={(e) => { setUserPassword(e.target.value) }} />
                            </div>
                            <button onClick={() => SignInHandler()}>로그인</button>
                            <p>
                                <b>
                                    비밀번호를 잊으셨나요?
                                </b>
                            </p>
                            <p>
                                <span>
                                    회원이 아니신가요??
                                </span>
                                <b className="pointer" onClick={handleToggle}>
                                    Sign up here
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="form-wrapper"></div>
                </div>
            </div>
            <div className="row content-row">
                <div className="col align-items-center flex-col">
                    <div className="text sign-in">
                        <h2>환영합니다.</h2>
                    </div>
                    <div className="img sign-in"></div>
                </div>
                <div className="col align-items-center flex-col">
                    <div className="img sign-up"></div>
                    <div className="text sign-up">
                        <h2>같이 즐겨요!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}


