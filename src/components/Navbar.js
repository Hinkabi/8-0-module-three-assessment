import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img
            className="pet-logo"
            src="https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers.jpg"
            alt="pet logo"
            width="50px"
          />
        </Link>
        <Link to="/locations"> Locations</Link>
        <Link to="/people">People </Link>
        <Link to="/movies">Movies </Link>
      </nav>
    );
  }
}

export default Navbar;
