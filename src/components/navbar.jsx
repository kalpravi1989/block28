import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <div id="navbar">
        <Link to="/">HOME</Link>
        <Link to="/red"> RED</Link>
        <Link to="/blue"> BLUE</Link>
        </div>
    );
}
