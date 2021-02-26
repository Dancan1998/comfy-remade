import React, { useEffect } from "react";
import styled from "styled-components";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFilters,
  clearFilters,
  filteringProducts,
} from "../actions/filterActions";

const Filters = () => {
  const dispatch = useDispatch();

  const filterProducts = useSelector((state) => state.filterProducts);
  const { filters, all_products } = filterProducts;

  useEffect(() => {
    dispatch(filteringProducts());
  }, [dispatch, filters]);

  const {
    text,
    company,
    color,
    max_price,
    min_price,
    price,
    shipping,
    category,
  } = filters;

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-controll">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={(e) => dispatch(updateFilters(e))}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="form-controll">
            <h5>category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    name="category"
                    onClick={(e) => dispatch(updateFilters(e))}
                    type="button"
                    className={`${
                      category === cat.toLowerCase() ? "active" : null
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end categories */}
          {/* companies */}
          <div className="form-controll">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={(e) => dispatch(updateFilters(e))}
              className="company"
            >
              {companies.map((com, index) => {
                return (
                  <option value={com} key={index}>
                    {com}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end companies */}
          {/* colors */}
          <div className="form-controll">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={(e) => dispatch(updateFilters(e))}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    onClick={(e) => dispatch(updateFilters(e))}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end colors */}
          {/* price */}
          <div className="form-">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={(e) => dispatch(updateFilters(e))}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end price */}
          {/* shipping */}
          <div className="form-controll shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={(e) => dispatch(updateFilters(e))}
              checked={shipping}
            />
          </div>
          {/* end shipping */}
        </form>
        <button
          type="button"
          className="clear-btn"
          onClick={() => dispatch(clearFilters())}
        >
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-controll {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  // button:focus {
  //   outline: none;
  // }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
