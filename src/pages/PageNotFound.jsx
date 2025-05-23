
import image from "../assets/image.png"
import { Link, useNavigate} from "react-router-dom"


const PageNotFound = () => {
  
      const navigate = useNavigate()

      const handleclick = () =>{

    
       console.log("Handle click function call")  
      navigate("/login")
       
        }

        
 return(
    <div>
    <h1>This page is not found error 404</h1>
    <img className=" W-full"   src={image}  alt="404"/>
     <button onClick={(handleclick)}>Login</button>
    {/*<Link to ="/Login">Login</Link>*/}
    </div>
 )

}


export default PageNotFound;