import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singleProduct } from "../actions/productActions";

const SingleProductPage = ({ match, history }) => {
  const dispatch = useDispatch();

  const singleProductContext = useSelector(
    (state) => state.singleProductContext
  );

  const {
    loading: singleProductLoading,
    error: singleProductError,
    single_product,
  } = singleProductContext;

  useEffect(() => {
    dispatch(singleProduct(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (singleProductError) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [history, singleProductError]);

  const {
    name,
    price,
    description,
    stars,
    countInStock,
    images,
    stars: product_stars,
    reviews,
    company,
    id,
  } = single_product;

  return (
    <>
      {singleProductLoading ? (
        <Loading />
      ) : singleProductError ? (
        <Error variant="danger">{singleProductError}</Error>
      ) : (
        <Wrapper>
          <PageHero title={name} product />
          <div className="section page section-center">
            <Link to="/products" className="btn">
              back to products
            </Link>
            <div className="product-center">
              <ProductImages images={images} />
              <section className="content">
                <h2>{name}</h2>
                <Stars />
                <h5 className="price">{formatPrice(price)}</h5>
                <p className="desc">{description}</p>
                <p className="info">
                  <span>Available :</span>
                  {countInStock > 0
                    ? `${countInStock} in stock`
                    : "Out of stock"}
                </p>
                <p className="info">
                  <span>Brand :</span>
                  {company}
                </p>
                <hr />
                {countInStock > 0 && <AddToCart />}
              </section>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
