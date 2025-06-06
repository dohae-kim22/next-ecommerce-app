"use client";

import useFetchDocument from "@/hooks/useFetchDocument";
import { useParams } from "next/navigation";
import React from "react";
import styles from "./ProductDetailsClient.module.scss";
import Image from "next/image";
import Loader from "@/components/loader/Loader";
import { Rating } from "react-simple-star-rating";

const ProductDetailsClient = () => {
  const { id } = useParams();
  const { document: product } = useFetchDocument("products", id);

  console.log(product);

  const addToCart = () => {};

  return (
    <main className={styles.main}>
      <section className={styles.productDetails}>
        {product === null ? (
          <Loader />
        ) : (
          <>
            <div className={styles.imageContainer}>
              <Image src={product.imageUrl} width={450} height={450} />
            </div>
            <div>
              <div className={styles.productInfoContainer}>
                <p className={styles.brand}>{product.brand}</p>
                <p className={styles.name}>{product.name}</p>
                <div>
                  <Rating readonly size={20} initialValue={0} />
                  <span className={styles.ratingCount}>(3)</span>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default ProductDetailsClient;
