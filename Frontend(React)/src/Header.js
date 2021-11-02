import { Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Fade from "react-reveal/Fade";
import { useState } from "react";
import './App.css';
import './styles/styles.css';



function Header() {
  const user = JSON.parse(localStorage.getItem('user-info'));
  // const name = user['name'];
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push('/login');
  }



  // extra functions
  const changeBackground = () => {
    let header = document.getElementsByClassName("header-nav")[0];
    if (window.scrollY < 100) {
      if (header) {
        header.classList.remove("sticky");
        header.classList.remove("header-nav-scrolled");
      }
    } else {
      if (header) {
        header.classList.add("sticky");
        header.classList.add("header-nav-scrolled");
      }
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(!hover);
  const [isOpen, setIsOpen] = useState(false);

  // end of extra functions




  return (
    <Fade>
      <Navbar bg="dark" variant="light" className="header-nav dark" collapseOnSelect expand="xl">

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
        <Link className="px-4 nav-link" to="/allEvents">
          All Events
        </Link>

        <Link className="px-4 nav-link" to="/coming_soon">
          Contribute
        </Link>
        <Link className="px-4 nav-link" to="/contacts">
          Contact Us
        </Link>
        <Dropdown >
          <Dropdown.Toggle variant="dark" id="dropdown-basic" className="px-4 nav-link">
            Events
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdownMenu">
            <Dropdown.Item href="/allEvents" >
                All Events
            </Dropdown.Item>
            <Dropdown.Item >
              <Link className="px-4 nav-link" to="/upcomingEvents">
                Upcoming Events
              </Link>
            </Dropdown.Item>
            <Dropdown.Item >
              <Link className="px-4 nav-link" to="/micEvents">
                Mic Events
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <Nav className="me-auto nav_bar_wrapper "> */}
        {
          localStorage.getItem('user-info') ?
            <>
              <Link className="px-4 nav-link" to="/profile">Profile</Link>
              {console.log(user.name)}
            </>
            :
            <>
              <Link className="px-4 nav-link" to="/login">Login</Link>
              <Link className="px-4 nav-link" to="/register">SignUp</Link>
            </>
        }
        {/* </Nav> */}
        {localStorage.getItem('user-info') ?
          <Nav>

            <NavDropdown title={user && user.name}>
              <NavDropdown.Item className="logout" onClick={logout}>
                Logout
              </NavDropdown.Item>
              <NavDropdown.Item>
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          : null
        }

      </Navbar>
    </Fade>

  );
}

export default Header;