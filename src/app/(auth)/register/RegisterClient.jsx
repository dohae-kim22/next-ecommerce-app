"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoPath from "@/assets/shop-logo.png";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";
import Link from "next/link";
import styles from "../login/Auth.module.scss";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const RegisterClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
        setIsLoading(false);
        toast.success("Registered successfully!");
        router.push("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div>
          <h1>
            <Image priority src={LogoPath} alt="Shop Logo" width={300} />
          </h1>
        </div>

        <form className={styles.form} onSubmit={registerUser}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit">Sign Up</button>
            <button className={styles.secondaryButton}>
              <Link href={"/login"}>Sign In</Link>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default RegisterClient;
