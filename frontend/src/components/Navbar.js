import "./Navbar.css";

const Navbar = ({ click }) => {

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Shopping Cart</h2>
      </div>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
