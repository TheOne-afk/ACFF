import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <div>
            <nav>Navbar</nav>
            <Link to="test" >
            <h1>Workout buddy</h1>
            </Link>
        </div>
    )
}

export default Navbar