import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ProductItem.module.scss";
import { Rating } from "react-simple-star-rating";

const ProductItem = ({ id, name, price, brand, imageUrl }) => {
  const shortenTitle = (title, n) => {
    const words = title.split(" ");
    return words.length > n ? words.slice(0, n).join(" ") + "..." : title;
  };

  shortenTitle(name);
  return (
    <div className={styles.productItem}>
      <Link href={`/product-details/${id}`}>
        <div className={styles.img}>
          <Image src={imageUrl} alt="name" width={230} height={230} />
        </div>
        <div className={styles.productInfo}>
          <p className={styles.title}>{shortenTitle(name, 10)}</p>
          <p className={styles.brand}>{brand}</p>
        </div>
        <div className={styles.priceSection}>
          <p className={styles.price}>{price.toLocaleString("fr-FR")}</p>
          <span className={styles.unit}>€</span>
        </div>
        <div>
          <Rating readonly size={18} initialValue={0} />
          <span className={styles.ratingCount}>(3)</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
