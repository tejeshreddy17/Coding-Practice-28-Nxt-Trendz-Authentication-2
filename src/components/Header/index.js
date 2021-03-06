import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onclickingLogout = () => {
    const {history} = props
    console.log(history)
    history.replace('/login')
    Cookies.remove('jwt_token')
  }
  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />

            <button
              type="button"
              className="nav-mobile-btn"
              onClick={onclickingLogout}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="nav-bar-img"
              />
            </button>
          </div>

          <div className="nav-content nav-bar-large-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <ul className="nav-menu">
              <Link className="link-item" to="/">
                <li className="nav-menu-item">Home</li>
              </Link>
              <Link className="link-item" to="/products">
                <li className="nav-menu-item">Products</li>
              </Link>

              <Link className="link-item" to="/cart">
                <li className="nav-menu-item">Cart</li>
              </Link>
            </ul>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onclickingLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="nav-menu-mobile">
          <ul className="nav-menu-list-mobile">
            <Link to="/">
              <li className="nav-menu-item-mobile">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                  alt="nav home"
                  className="nav-bar-img"
                />
              </li>
            </Link>
            <Link to="/Products">
              <li className="nav-menu-item-mobile">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                  alt="nav products"
                  className="nav-bar-img"
                />
              </li>
            </Link>
            <Link to="/cart">
              <li className="nav-menu-item-mobile">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                  alt="nav cart"
                  className="nav-bar-img"
                />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default withRouter(Header)
