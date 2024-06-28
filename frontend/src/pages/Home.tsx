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
        <h1>Welcome to Yummkey</h1>
        <img src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='food pic from pexels'/>
        {userData.id ? <Recipes /> : null}
    </main>
    </>
  )
}

export default () => <App><Home /></App>