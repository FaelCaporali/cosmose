import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppContext from '.'
import IChar from '../character/IChar';

function Provider ({ children }: { children: React.ReactNode }) {
    const [characters, setCharacters] = useState<IChar[]>([]);

    const addCharacter = (char: IChar) => {
        setCharacters([...characters, char]);
    }
    const deleteCharacter = (id: number) => {
        setCharacters(characters.filter(char => char.id !== id));
    }

    const editCharacter = (id: number, char: IChar) => {
        setCharacters(characters.map(c => c.id === id ? char : c));
    }

    return (
        <AppContext.Provider
            value={{
                characters,
                addCharacter,
                deleteCharacter,
                editCharacter,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
