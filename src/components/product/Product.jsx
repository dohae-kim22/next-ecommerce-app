"use client";

import React, { useEffect } from "react";
import useFetchCollection from "@/hooks/useFetchCollection";
import styles from "./Product.module.scss";
import { selectProducts, setProducts } from "@/redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const { data, isLoading } = useFetchCollection("products");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts({ products: data }));
  }, [data, dispatch]);

  const products = useSelector(selectProducts);

  return (
    <section className={styles.product}>
      <aside className={styles.filter}></aside>
      <div className={styles.content}></div>
    </section>
  );
};

export default Product;
