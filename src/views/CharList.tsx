import { useContext } from "react";
import AppContext from "../context";
import CharacterListItem from "../components/CharacterListItem";
import IChar from "../character/IChar";

export default function CharList() {
    const { characters } = useContext(AppContext);
    return (
        <>
            {characters.map((char: IChar) => (
                <CharacterListItem char={char} key={char.id} />
            ))}
        </>
    );
}
