import { useContext } from "react";
import AppContext from "../context";
import IChar from "../character/IChar";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CharacterListItem({ char }: { char: IChar }) {
    const { deleteCharacter } = useContext(AppContext);
    return(
        <Container as="li">
            <h3>{char.info.name}</h3>
            <p>{char.player}</p>
            <div>
                <Button type="button" onClick={() => deleteCharacter(char.id)} value="Excluir" />
                <Link type="button" to={`/character/${char.id}`} placeholder="Editar" />
            </div>
        </Container>
    );
}