import { useContext } from 'react'
import App from '../App'
import { Recipes, Navigation } from "../components"
import { UserContext } from "../context/UserContext"

const Home = () => {
    const [ userData ] = useContext(UserContext)

   return (
       <>
       <Navigation />
     <main className="container">
        <h1>Home</h1>
        {userData.id ? <Recipes /> : null}
    </main>
    </>
  )
}

export default () => <App><Home /></App>