import React, { useState, useEffect, Component, Fragment, lazy, Suspense } from 'react'
import Loading from './components/common/Loading';
import { useHistory } from 'react-router-dom'
import Header from './Header';
const RegisterCover = lazy(() => import('./components/register/cover'));
const RegisterInfo = lazy(() => import('./components/register/info'));
import Footer from './components/common/footer';


function Register() {

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/profile');
        }
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    // const [Gendre, setGendre] = useState("");
    const history = useHistory();

    async function signUp() {
        let item = { name, email, password };

        let result = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push("/profile");
    }

    return (<Fragment>
        <Suspense fallback={<Loading />}>
            <Header />
            <RegisterCover />
            <RegisterInfo />
            <div className="col-sm-4 offset-sm-4 register-form">
                <h1>Registration Page</h1>

                <div class="form-group my-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div class="form-group my-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div class="form-group my-3">
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div class="form-group ">
                   
                    <select id="inputState" class="form-control">
                        <option selected>Gendre...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                        <option>Unspecified</option>
                    </select>
                </div>
                <div class="form-group my-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Permanent Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                </div><div class="form-group my-3">
                    
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact Number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                {/* <h3>Name</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
            <br />
            <h3>E mail</h3>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></input>
            <br />
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"></input>
            <br />
            <button onClick={signUp} type="submit" className="btn btn-primary">Sign Up</button>*/}
            </div>
            <Footer />
        </Suspense>
    </Fragment>
    );
}

export default Register;