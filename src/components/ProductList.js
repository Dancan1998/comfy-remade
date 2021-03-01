import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSelector } from "react-redux";

const ProductList = ({ products }) => {
  const viewLayout = useSelector((state) => state.viewLayout);
  const { grid_view } = viewLayout;

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
