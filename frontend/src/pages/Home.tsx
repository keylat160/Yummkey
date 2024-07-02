import { useContext } from 'react'
import App from '../App'
import { Recipes, Navigation } from "../components"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        {userData.id ? <Recipes /> : null}
    </main>

      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Salad</h5>
            <p>Healthy Recipes coming...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Pasta</h5>
            <p>Italian Cuisine.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Seafood</h5>
            <p>
              Quick and easy recipes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }


export default () => <App><Home /></App>