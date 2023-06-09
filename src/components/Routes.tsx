import { Routes as AppRoutes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Character from '../views/Char'
import CharList from '../views/CharList'

const Routes = () => {
    return (
        <AppRoutes>
            <Route path='/' element={ <Home /> }/>
            <Route path='character/:id' element={ <Character mode="view" /> }/>
            <Route path='character/new' element={ <Character mode="edit" /> }/>
            <Route path="character" element={ <CharList /> }/>
        </AppRoutes>
    )
}

export default Routes
