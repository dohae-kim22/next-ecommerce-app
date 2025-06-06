"use client";

import React, { useState } from "react";
import styles from "./InnerHeader.module.scss";
import Link from "next/link";
import Image from "next/image";
import LogoPath from "@/assets/shop-logo.png";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "@/redux/slice/productSlice";
import { filterBySearch } from "@/redux/slice/filterSlice";

const InnerHeader = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterBySearch({ products, search }));
  };

  return (
    <div className={styles.innerHeader}>
      <div className={styles.container}>
        {/* Category button */}
        <button type="button" className={styles.buttonCategory}>
          Category
        </button>

        {/* Shop Logo */}
        <h1>
          <Link href={"/"} className={styles.logo}>
            <Image priority src={LogoPath} alt="Shop Logo" height={80} />
          </Link>
        </h1>

        {/* Search form */}
        <form action="" className={styles.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className={styles.searchButton} />
        </form>

        {/* My account dropdown */}
        <div className={styles.mySpace}>
          <button type="button" className={styles.mySpaceButton} />
          <ul className={styles.mySpaceList}>
            <li>
              <Link href={"/"}>Order List</Link>
            </li>
            <li>
              <Link href={"/"}>Cancel / Return</Link>
            </li>
            <li>
              <Link href={"/"}>Favorites</Link>
            </li>
          </ul>
        </div>

        {/* Cart Button */}
        <div className={styles.cart}>
          <button type="button" className={styles.cartButton} />
        </div>
      </div>
    </div>
  );
};

export default InnerHeader;
