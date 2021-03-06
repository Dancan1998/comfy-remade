import React, { useEffect } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logged_user_shipping_profile } from "../actions/userActions";

const CartTotals = () => {
  const dispatch = useDispatch();
  const cartContext = useSelector((state) => state.cartContext);
  let { total_amount, order_totals, shipping_cost } = cartContext;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const gettingShippingProfile = useSelector(
    (state) => state.gettingShippingProfile
  );
  const { getshippingProfile = [{ id: 0 }] } = gettingShippingProfile;

  const getLoggedUserAddress = useSelector(
    (state) => state.getLoggedUserShippingProfile
  );
  const { shippingProfile: loggedUserShippingAddress } = getLoggedUserAddress;

  useEffect(() => {
    if (userInfo && userInfo.data) {
      if (getshippingProfile && getshippingProfile[0]) {
        const { id } = getshippingProfile[0];
        dispatch(logged_user_shipping_profile(id));
      }
    }
  }, [dispatch, getshippingProfile, userInfo]);

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_cost)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(order_totals)}</span>
          </h4>
        </article>
        {userInfo && userInfo.data ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <Link to={`/login?redirect=checkout`} className="btn">
            Login
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
