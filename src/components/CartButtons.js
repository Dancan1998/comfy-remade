import React, { useEffect } from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../actions/productActions";
import { countCartTotals } from "../actions/cartActions";
import { logout } from "../actions/userActions";

const CartButtons = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const cartContext = useSelector((state) => state.cartContext);
  const { total_items, cart } = cartContext;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(countCartTotals());
  }, [cart, dispatch, total_items]);

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link
        to="/cart"
        className="cart-btn"
        onClick={() => dispatch(closeSidebar())}
      >
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {userInfo && userInfo.data ? (
        <button className="auth-btn" onClick={() => dispatch(logout())}>
          Logout <FaUserMinus />
        </button>
      ) : (
        <Link to="/login" className="auth-btn">
          Login <FaUserPlus />
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;

/* <button type="button" className="auth-btn">
        Login <FaUserPlus />
      </button> */
// {pathname === "/login" || pathname === "/register" ? null : (
//         <Link to="/login" className="auth-btn">
//           Login <FaUserPlus />
//         </Link>
//       )}
