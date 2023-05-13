import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Routes from './components/Routes'
import Provider from './context/Provider'
import './App.css'

function App() {

  return (
    <Provider>
      <Container>
        <Navbar expand="lg" bg='dark' variant='dark' as="nav">
            <Link to="/" className='text-white'>Menu Inicial</Link>
            <Link to="/character/new" className='text-white'>Novo Personagem</Link>
            <Link to="/character" className='text-white'>Personagens</Link>
        </Navbar>
      </Container>
      <Container>
        <Routes />
      </Container>
    </Provider>
  )
}

export default App
