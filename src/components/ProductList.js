import React, { useEffect } from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSelector, useDispatch } from "react-redux";
import { filterProductslist } from "../actions/filterActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const filterProducts = useSelector((state) => state.filterProducts);
  const { filtered_products: products } = filterProducts;

  useEffect(() => {
    dispatch(filterProductslist());
  }, [dispatch]);

  return <GridView products={products}></GridView>;
};

export default ProductList;
