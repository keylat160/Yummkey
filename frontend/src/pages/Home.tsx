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
     <div className="patterns">
  <svg width="100%" height="100%">
    <defs>
      <pattern id="polka-dots" x="0" y="0"                    width="100" height="100"
               patternUnits="userSpaceOnUse">
        <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
      </pattern>  
        <style>
     @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
   </style>
      </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
     <text x="50%" y="60%"  text-anchor="middle"  >
   Yummkey
 </text>
 </svg>
</div>
        <img src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='food pic from pexels'/>
        {userData.id ? <Recipes /> : null}
    </main>
    </>
  )
}

export default () => <App><Home /></App>