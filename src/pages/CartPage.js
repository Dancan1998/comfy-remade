import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getuserShippingProfile } from "../actions/userActions";

const CartPage = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const cartContext = useSelector((state) => state.cartContext);
  const { cart } = cartContext;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const gettingShippingProfile = useSelector(
    (state) => state.gettingShippingProfile
  );
  const { getshippingProfile } = gettingShippingProfile;
  console.log(getshippingProfile);

  useEffect(() => {
    if (userInfo && userInfo.data) {
      dispatch(getuserShippingProfile());
    }
  }, [dispatch, userInfo]);

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
