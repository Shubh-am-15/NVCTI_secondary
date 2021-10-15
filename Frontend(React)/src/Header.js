import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import Fade from "react-reveal/Fade";
import {usestate} from "react";
import './App.css';
import './styles/styles.css';



function Header(){
    const user = JSON.parse(localStorage.getItem('user-info'));
    // const name = user['name'];
    const history = useHistory();

    function logout() {
        localStorage.clear();
        history.push('/login');
    }

    return (
            <Fade>
            <Navbar bg="dark" variant="light" className="header-nav dark" fixed="top" collapseOnSelect expand="xl">
                
                {/* <Navbar.Brand href="/home">Home</Navbar.Brand> */}
                <Link className="px-4 nav-link" to="/">
                Home
              </Link>
              <Link className="px-4 nav-link" to="/about">
                About Us
              </Link>
              <Link className="px-4 nav-link" to="/facilities">
                Facilities
              </Link>
              <Link className="px-4 nav-link" to="/coming_soon">
                Projects
              </Link>
              
              <Link className="px-4 nav-link" to="/coming_soon">
                Contribute
              </Link>
              <Link className="px-4 nav-link" to="/contacts">
                Contact Us
              </Link>
                    <Nav className="me-auto navlink nav_bar_wrapper">
                        {
                            localStorage.getItem('user-info') ? 
                            <>
                                <Link to="/profile">Profile</Link>
                                {console.log(user.name)}
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">SignUp</Link>
                            </>
                        }
                        
                        
                    </Nav>
                    {localStorage.getItem('user-info') ?
                    <Nav>
                        
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logout}>
                                Logout
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :null
                    }
                
            </Navbar>
            </Fade>
        
    );
}

export default Header;