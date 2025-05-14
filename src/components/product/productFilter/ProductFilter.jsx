import { filterBy } from "@/redux/slice/filterSlice";
import {
  selectMaxPrice,
  selectMinPrice,
  selectProducts,
} from "@/redux/slice/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductFilter.module.scss";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(1000);

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);

  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  const filterCategories = (category) => {
    setCategory(category);
  };

  const priceFormat = (price) => {
    return price.toLocaleString("fr-FR");
  };

  const clearFilters = () => {
    setCategory("All");
    setBrand("All");
    setPrice(maxPrice);
  };

  useEffect(() => {
    if (maxPrice) {
      setPrice(maxPrice);
    }
  }, [maxPrice]);

  useEffect(() => {
    dispatch(filterBy({ products, category, brand, price }));
  }, [dispatch, products, brand, category, price]);

  return (
    <div className={styles.filter}>
      <h4>Category</h4>
      <div className={styles.category}>
        {allCategories.map((cat) => {
          return (
            <button
              key={cat}
              type="button"
              className={category === cat ? styles.active : ""}
              onClick={() => filterCategories(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <h4>Brand</h4>
      <div className={styles.brand}>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {allBrands.map((brand) => {
            return (
              <option value={brand} key={brand}>
                {brand}
              </option>
            );
          })}
        </select>
      </div>

      <h4>Price</h4>
      <p>{priceFormat(Number(price))}€</p>
      <div className={styles.price}>
        <input
          type="range"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min={minPrice}
          max={maxPrice}
        />
      </div>
      <button className={styles.resetButton} onClick={clearFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default ProductFilter;
