import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header';

function Register(){

    useEffect(() =>{
        if(localStorage.getItem('user-info')){
            history.push('/profile');       
        }
    },[]);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

async    function signUp(){
        let item = {name,email,password};
        
        let result = await fetch('http://127.0.0.1:8000/api/register',{
            method: 'POST',
            headers: {'Content-Type':"application/json",
                      'Accept' : 'application/json',  
                    },
            body : JSON.stringify(item),      
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user-info',JSON.stringify(result));
        history.push("/profile");
    }

    return (<>
        <Header/>
        <div className="col-sm-4 offset-sm-4">
            <h1>Sign Up Page</h1>
            <h3>Name</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="form-control"></input>
            <br/>
            <h3>E mail</h3>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"></input>
            <br/>
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"></input>
            <br/>
            <button onClick={signUp} type="submit" className="btn btn-primary">Sign Up</button>
        </div>
        </>
    );
}

export default Register;