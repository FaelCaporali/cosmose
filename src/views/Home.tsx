import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
export default function Home() {
    return(
        <Container>
            <h1 className="text-center mt-5">COSMOSE - FICHAS DE PERSONAGENS</h1>
            <h2 className="text-center mt-5">Navegue pelo menu para {
                    <Link to="/character/new">criar</Link>
                } / {
                    <Link to="/character">editar</Link>
                } / {
                    <Link to="character">deletar</Link>
                } fichas de personagens
            </h2>
        </Container>
    )
}
