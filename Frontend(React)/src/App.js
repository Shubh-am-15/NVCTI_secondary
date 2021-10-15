// this is Home page of the app
// Header==Navbar

import logo from './logo.svg';
import './App.css';
import Protected from './Protected';
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import Header from './Header';
import Profile from './Profile';
import About from './Pages/About';
import Facilities from './Pages/Facilities';
import Home from './Pages/Home';
import {BrowserRouter,Route} from 'react-router-dom';
import ComingSoon from './Pages/ComingSoon';
import Contacts from './Pages/Contacts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path="/">
          <Home/>
      </Route>
      <Route exact path="/about">
          <About/>
      </Route>
      <Route exact path="/facilities">
          <Facilities/>
      </Route>
      <Route exact path="/coming_soon">
          <ComingSoon/>
      </Route>
      <Route exact path="/coming_soon">
          <ComingSoon/>
      </Route>
      <Route exact path="/contacts">
          <Contacts/>
      </Route>

      <Route exact path="/login">
          <Login/>
      </Route>
      
      <Route exact path="/profile">
          <Protected Cmp={Profile}/>
      </Route>
      <Route exact path="/update">
          <Protected Cmp={UpdateProduct}/>
      </Route>
      <Route exact path="/register">
          <Register/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
