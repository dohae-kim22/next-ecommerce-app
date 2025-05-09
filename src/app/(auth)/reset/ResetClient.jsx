"use client";

import React, { useState } from "react";
import styles from "./ResetClient.module.scss";
import Loader from "@/components/loader/Loader";
import Link from "next/link";

const ResetClient = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1>Reset Your Password</h1>
          <h2>We'll send you a link to reset it.</h2>

          <form className={styles.form} onSubmit={resetPassword}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Send Reset Link</button>
            <button className={styles.secondaryButton}>
              <Link href={"/login"}>Go Back to Sign In</Link>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResetClient;
