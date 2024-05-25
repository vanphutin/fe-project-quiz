import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/apiService";

import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doLogout } from "../../redux/action/userAction";
import Language from "./Language";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogOut = async () => {
    const res = await logout(account.email, account.refresh_token);
    if (res && res.EC === 0) {
      dispatch(doLogout());
      navigate("/login");
    } else {
      toast.error(res.EM);
    }
    console.log("check res >>", res);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <b>VAN PHU TIN</b>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link">
              User
            </NavLink>
            <NavLink to="/admins" className="nav-link">
              Admin
            </NavLink>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#user">User</Nav.Link>
            <Nav.Link href="#admin">Admin</Nav.Link> */}
          </Nav>
          <nav>
            {isAuthenticated === false ? (
              <>
                <button
                  type="button"
                  className="btn-login"
                  onClick={() => {
                    handlelogin();
                  }}
                >
                  Log in
                </button>
                <button
                  type="button"
                  className="btn-signup"
                  onClick={() => {
                    handleRegister();
                  }}
                >
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleLogOut()}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Language></Language>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
