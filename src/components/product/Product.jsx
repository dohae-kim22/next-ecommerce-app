"use client";

import React, { useEffect } from "react";
import useFetchCollection from "@/hooks/useFetchCollection";
import styles from "./Product.module.scss";
import {
  getPriceRange,
  selectMaxPrice,
  selectMinPrice,
  selectProducts,
  setProducts,
} from "@/redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductFilter from "./productFilter/ProductFilter";
import Loader from "../loader/Loader";
import ProductList from "./productList/ProductList";

const Product = () => {
  const { data, isLoading } = useFetchCollection("products");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts({ products: data }));

    dispatch(getPriceRange({ products: data }));
  }, [data, dispatch]);

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);

  return (
    <section className={styles.product}>
      <aside className={styles.filter}>
        {isLoading ? null : <ProductFilter />}
      </aside>
      <div className={styles.content}>
        {isLoading ? <Loader inline /> : <ProductList />}
      </div>
    </section>
  );
};

export default Product;
