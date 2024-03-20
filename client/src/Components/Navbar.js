import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <div className="navbar-main-div">
      <nav>
        <div id="logo">Your Logo here</div>

        <label htmlFor="drop" className="toggle">
          Menu
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          <li className="navbar_nav_ul_li">
            <a className="navbarLinks" href="/">
              Home
            </a>
          </li>
          <li className="navbar_nav_ul_li">
            <label htmlFor="drop-2" className="toggle">
              Login
            </label>
            <a className="inactiveLink navbarLinks" href="/">
             <LoginIcon/> Login  &#9660;
            </a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li className="navbar_nav_ul_li">
                <a className="navbarLinks" href="/CustomerLogin">
                  Customer Login
                </a>
              </li>
              <li className="navbar_nav_ul_li">
                <a className="navbarLinks" href="/SellerLogin">
                  Seller Login
                </a>
              </li>
              <li className="navbar_nav_ul_li">
                <a className="navbarLinks" href="/">
                  AdminLogin
                </a>
              </li>
            </ul>
          </li>

          <li className="navbar_nav_ul_li">
            <a className="navbarLinks" href="/">
              Mobiles
            </a>
          </li>

          <li className="navbar_nav_ul_li">
            <label htmlFor="drop-1" className="toggle">
              Electronics
            </label>
            <a className="inactiveLink navbarLinks" href="/">
              Electronics  &#9660;
            </a>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li className="navbar_nav_ul_li">
                <a className="navbarLinks" href="/">
                  Computers
                </a>
              </li>
              <li className="navbar_nav_ul_li">
                <a className="navbarLinks" href="/">
                  Laptops
                </a>
              </li>
              <li className="navbar_nav_ul_li">
                <a className="navbarLinks" href="/">
                  Television
                </a>
              </li>
              <li className="navbar_nav_ul_li">
                <a className="navbarLinks" href="/">
                  Refrigerator
                </a>
              </li>
              <li className="navbar_nav_ul_li">
                <a className="navbarLinks" href="/">
                  Washing Machine
                </a>
              </li>
            </ul>
          </li>


          <li className="navbar_nav_ul_li">
            <a className="navbarLinks" href="/">
              Clothes
            </a>
          </li>
          <li className="navbar_nav_ul_li">
            <a className="navbarLinks" href="/">
              Best Sellers
            </a>
          </li>
          <li className="navbar_nav_ul_li">
            <a className="navbarLinks" href="/">
              Today's Deals
            </a>
          </li>
          <li className="navbar_nav_ul_li">
            <a className="navbarLinks" href="/">
              Fashion
            </a>
          </li>
          <li className="navbar_nav_ul_li">
            <a className="navbarLinks" href="/">
              Books
            </a>
          </li>

          <li className="navbar_nav_ul_li">
            <a className="navbarLinks" href="/">
              <LogoutIcon /> Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
