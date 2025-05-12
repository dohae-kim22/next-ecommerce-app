"use client";

import React, { useState } from "react";
import styles from "./AddProductClient.module.scss";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Home & Garden" },
  { id: 4, name: "Sports" },
  { id: 5, name: "Toys" },
  { id: 6, name: "Automotive" },
  { id: 7, name: "Health & Beauty" },
  { id: 8, name: "Books" },
  { id: 9, name: "Music" },
  { id: 10, name: "Movies" },
  { id: 11, name: "Video Games" },
  { id: 12, name: "Pet Supplies" },
  { id: 13, name: "Baby" },
  { id: 14, name: "Office Supplies" },
];

const initialState = {
  name: "",
  imageUrl: "",
  price: 0,
  category: "",
  brand: "",
  description: "",
};

const AddProductClient = () => {
  const [product, setProduct] = useState({ ...initialState });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const addProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add new product to Firestore Database
      addDoc(collection(db, "products"), {
        name: product.name,
        imageUrl: product.imageUrl,
        price: Number(product.price),
        category: product.category,
        brand: product.brand,
        description: product.description,
        createdAt: Timestamp.now().toDate(),
      });

      setIsLoading(false);
      toast.success("Product added successfully");
      setProduct({ ...initialState });
      router.push("/admin/all-products");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Upload the image to firebase storage
    const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct((prev) => ({ ...prev, imageUrl: downloadURL }));
          toast.success("Image uploaded successfully");
        });
      }
    );
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.addProduct}>
        <h1>Add New Product</h1>
        <form onSubmit={addProduct}>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            placeholder="Product Name"
            id="name"
            name="name"
            required
            value={product.name}
            onChange={handleInputChange}
          />
          <label htmlFor="imageUrl">Product Image URL:</label>
          <input
            type="file"
            accept="image/*"
            id="imageUrl"
            name="imageUrl"
            required
            onChange={handleImageChange}
          />
          {product.imageUrl && <p>{product.imageUrl}</p>}
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            placeholder="Product Price"
            id="price"
            name="price"
            required
            value={product.price}
            onChange={handleInputChange}
          />
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            required
            value={product.category}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            placeholder="Product Brand Name"
            id="brand"
            name="brand"
            required
            value={product.brand}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            placeholder="Product Description"
            id="description"
            name="description"
            required
            rows={10}
            cols={50}
            value={product.description}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProductClient;
