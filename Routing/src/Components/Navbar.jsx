import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
         {/* <a href="url">Home</a> */}
      <nav className="nav">
        <Link to="/home" >about me</Link>
        <Link to="/about" > skills</Link>
        <Link to="/contact"> project</Link>
      </nav>
      
    </div>
  )
}
