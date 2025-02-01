import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";

const NavBar = () => {
  return (
    <header>
      <nav className="max-w-7xl mx-auto py-7">
        <ul className=" flex justify-between">
          <div className="space-x-7">
          <Link to={"/"}>Task</Link>
          <Link to={"/user"}>User</Link>
          </div>
          <div >
            <ModeToggle />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
