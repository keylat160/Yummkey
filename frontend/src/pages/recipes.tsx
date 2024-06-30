import { useContext } from 'react'
import Recipes from "../components/Recipes"
import App from '../App'
import { UserContext } from "../context/UserContext"

const Recipes = () => {
    const [ userData ] = useContext(UserContext)


}
export default () => <App><Recipes /></App>
