import React, { useState, useEffect, Component, Fragment, lazy, Suspense } from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header';
import Footer from './components/common/footer';
import Loading from './components/common/Loading';
const LoginCover = lazy(() => import('./components/Login/cover'));
const LoginInfo = lazy(() => import('./components/Login/info'));
// import LoginCover from './components/Login/cover';
// import LoginInfo from '.components/Login/info';
 
function Login(){
    const history = useHistory();
    useEffect(() =>{
        if(localStorage.getItem('user-info')){
            history.push('/profile');
        }
    },[]);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

async function login(){
        let item = {email,password};
        let result = await fetch('http://127.0.0.1:8000/api/login',{
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json', 
                'Accept' : 'application/json',
            },
            body : JSON.stringify(item),
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user-info',JSON.stringify(result));
        history.push("/profile");
    }

    return (
        <Fragment >
        <Suspense fallback={<Loading />}>
            <Header/>
            <LoginCover />
            <LoginInfo />
            <h1>Login Page</h1>
            <div className="col-sm-4 offset-sm-4 register-form">
            <h3>E mail</h3>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"></input>
            <br/>
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"></input>
            <br/>
            <button onClick={login} type="submit" className="btn btn-primary">Login</button>
        </div>
        <Footer />
        </Suspense>
        </Fragment>
    );
}

export default Login;