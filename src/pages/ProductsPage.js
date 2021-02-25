import React, { useEffect } from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
import { filterProductslist } from "../actions/filterActions";
import { useSelector, useDispatch } from "react-redux";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const filterProducts = useSelector((state) => state.filterProducts);
  const { filtered_products: products } = filterProducts;
  useEffect(() => {
    dispatch(filterProductslist());
  }, [dispatch]);
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort products={products} />
            <ProductList products={products} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
