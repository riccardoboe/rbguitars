import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Button,
  Badge,
} from 'react-bootstrap';
import { Store } from './Store';

function App() {
  const {
    state: { mode, cart },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' });
  };

  return (
    <div className="d-flex flex-column vh-100 ">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar
          expand="lg"
          className="d-flex justify-content-between align-items-center"
        >
          <LinkContainer to="/">
            <Navbar.Brand>
              &nbsp;
              <img src="../images/rbguitarslogo2.png" /> RBGuitars.
            </Navbar.Brand>
          </LinkContainer>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i
                className={
                  mode === 'light' ? 'fa fa-toggle-on' : 'fa fa-toggle-off'
                }
              ></i>
            </Button>

            <Link to="/cart" className="nav-link">
              <i className="fa fa-shopping-cart"></i>{' '}
              {cart.cartItems.length > 0 && (
                <Badge pill bg="success">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            <a href="/signin" className="nav-link">
              <i className="fa fa-user"></i>
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">footer</div>
      </footer>
    </div>
  );
}

export default App;
