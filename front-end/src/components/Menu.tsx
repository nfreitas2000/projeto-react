import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="menu">
            <Link to={"/"}>Home</Link>
            <Link to={"/produtos"}>Produtos</Link>
        </nav>
    )
}