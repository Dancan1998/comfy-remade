import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { removeItem, toggleAmount, clearCart } from "../actions/cartActions";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartContext = useSelector((state) => state.cartContext);
  const { cart, total_amount, total_items } = cartContext;
  console.log("total amount", total_amount);
  console.log("total items", total_items);

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link className="btn" to="/products">
            shop now
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
