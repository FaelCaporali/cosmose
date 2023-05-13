import { Container, Nav, Navbar } from 'react-bootstrap'
import Routes from './components/Routes'
import Provider from './context/Provider'
import './App.css'

function App() {

  return (
    <Provider>
      <Container>
        <Navbar expand="lg" bg='dark' variant='dark' as="nav">
            <Navbar.Brand href="/" className='text-white'>Menu Inicial</Navbar.Brand>
            <Nav.Link href="/character/new" className='text-white'>Novo Personagem</Nav.Link>
            <Nav.Link href="/character" className='text-white'>Personagens</Nav.Link>
            <Navbar.Toggle />
        </Navbar>
      </Container>
      <Container>
        <Routes />
      </Container>
    </Provider>
  )
}

export default App
