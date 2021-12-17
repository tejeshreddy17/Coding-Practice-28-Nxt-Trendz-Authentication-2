// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png "
        alt="cart"
      />
    </>
  )
}

export default Cart
