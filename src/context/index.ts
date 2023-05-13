/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import IChar from "../character/IChar";

interface AppContextInterface {
    characters: IChar[];
    addCharacter: (char: IChar) => void;
    deleteCharacter: (id: number) => void;
    editCharacter: (id: number, char: IChar) => void;
  }
  
  export const AppContext = createContext<AppContextInterface>({
    characters: [],
    addCharacter: () => {},
    deleteCharacter: () => {},
    editCharacter: () => {},
  });

export default AppContext;