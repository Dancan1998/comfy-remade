import React, { useEffect } from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
import { useSelector } from "react-redux";

const CheckoutPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!userInfo) {
      history.push("/login?redirect=checkout");
    }
  }, [history, userInfo]);

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
