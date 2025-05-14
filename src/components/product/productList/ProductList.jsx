import {
  selectFilteredProducts,
  sortProducts,
} from "@/redux/slice/filterSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductList.module.scss";
import ProductItem from "../productItem/ProductItem";

const ProductList = () => {
  const [sort, setSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(10);

  const filteredProducts = useSelector(selectFilteredProducts);
  console.log(filteredProducts);
  console.log(sort);
  const dispatch = useDispatch();

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const isRadioSelected = (value) => value === sort;
  const handleRadioClick = (e) => setSort(e.target.value);

  useEffect(() => {
    dispatch(sortProducts({ products: filteredProducts, sort }));
  }, [dispatch, sort]);

  return (
    <section className={styles.productListSection}>
      <div className={styles.productControls}>
        <div className={styles.radioButtonList}>
          <input
            type="radio"
            name="sort"
            id="latest"
            value="latest"
            checked={isRadioSelected("latest")}
            onChange={handleRadioClick}
          />
          <label
            htmlFor="latest"
            className={isRadioSelected("latest") ? styles.activeRadio : ""}
          >
            Latest
          </label>
          <input
            type="radio"
            name="sort"
            id="lowest-price"
            value="lowest-price"
            checked={isRadioSelected("lowest-price")}
            onChange={handleRadioClick}
          />
          <label
            htmlFor="lowest-price"
            className={
              isRadioSelected("lowest-price") ? styles.activeRadio : ""
            }
          >
            Price: Low to High
          </label>
          <input
            type="radio"
            name="sort"
            id="highest-price"
            value="highest-price"
            checked={isRadioSelected("highest-price")}
            onChange={handleRadioClick}
          />
          <label
            htmlFor="highest-price"
            className={
              isRadioSelected("highest-price") ? styles.activeRadio : ""
            }
          >
            Price: High to Low
          </label>
        </div>
        <select
          value={productPerPage}
          onChange={(e) => setProductPerPage(e.target.value)}
        >
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
          <option value={30}>30 per page</option>
        </select>
      </div>
      <div className={styles.productList}>
        {currentProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          <>
            {currentProducts.map((product) => (
              <div key={product.id}>
                <ProductItem {...product} />
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductList;
