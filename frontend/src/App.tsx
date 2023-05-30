import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap'
import { Store } from './Store'

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  return (
    <div className="d-flex flex-column vh-100 ">
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>RBguitars.</Navbar.Brand>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i
                className={
                  mode === 'light' ? 'fa fa-toggle-on' : 'fa fa-toggle-off'
                }
              ></i>
            </Button>

            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sing in
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
  )
}

export default App
