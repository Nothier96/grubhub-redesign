import { Link } from "react-router-dom";

function Header() {
  return (
      <div className="homepage-header">
        <section className="header-img">
          <img 
            src="https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_auto,c_crop,g_north_west,h_1400,w_1500/v1656688653/homepage/DfxwD.png"
            className="header-cover-img"
            alt="food-background"
          />

          <img 
            src="https://media-cdn.grubhub.com/image/upload/v1657121635/homepage/GH_logo_svg.svg"
            alt="logo"
            class="homepage-logo"
          />
        </section>

        <section className="header-info">
          <nav className="home-navbar">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/order">Order</Link>
              <Link to="/signin">Sign In</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </nav>

          <div className="food-search">
            <h3 className="food-search-title">Get food delivery and more</h3>
            <form className="food-search-form">
              <input placeholder="Enter street address or zip code" />
              <button class="food-search-btn">Search Nearby</button>
            </form>
          </div>
        </section>
      </div>
  )
}

export default Header