import React, { useEffect } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSelector, useDispatch } from "react-redux";
import { filterProductslist } from "../actions/filterActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const filterProducts = useSelector((state) => state.filterProducts);
  const { filtered_products: products, grid_view } = filterProducts;

  useEffect(() => {
    dispatch(filterProductslist());
  }, [dispatch]);

  if (products.length < 1) {
    return (
      <h3 style={{ textTransform: "none" }}>
        Sorry, no products matched your search
      </h3>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products}></GridView>;
};

export default ProductList;
