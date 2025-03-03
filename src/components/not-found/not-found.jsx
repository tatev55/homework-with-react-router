import { useRouteError } from 'react-router';
import "./not-found.css"

const NotFound = ()=> {
  
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className="not-found">
            <h1> 🙁 OOPS</h1> 
            <p>Sorry, the page you are looking for does not exist.</p> 
            {/* { <p>{error.statusText || error.message || "An unexpected error occurred."}</p> } */}
        </div>
    )
}

export default NotFound;