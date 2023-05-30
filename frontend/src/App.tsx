import { sampleProducts } from './data'
import { Outlet } from 'react-router-dom'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="d-flex flex-column vh-100 ">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>RBguitars.</Navbar.Brand>
          </Container>
          <Nav>
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
