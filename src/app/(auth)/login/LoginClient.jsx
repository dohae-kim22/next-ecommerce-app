"use client";

import React, { useState } from "react";
import styles from "./LoginClient.module.scss";
import Image from "next/image";
import LogoPath from "@/assets/shop-logo.png";
import { useRouter } from "next/navigation";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
  };

  return (
    <section className={styles.page}>
      <div>
        <h1>
          <Image priority src={LogoPath} alt="Shop Logo" width={300} />
        </h1>
      </div>

      <form className={styles.form} onSubmit={loginUser}>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.optionGroup}>
          <div className={styles.checkbox}>
            <input type="checkbox" id="autoSignIn" />
            <label htmlFor="autoSignIn">Remember Me</label>
          </div>
          <a>Forgot Password {">"}</a>
        </div>
        <div className={styles.buttonGroup}>
          <button>Sign In</button>
          <button>
            <Image
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              width={25}
              height={25}
              className={styles.googleLogo}
            />
            Sign In with Google
          </button>
          <button>Create Account</button>
        </div>
      </form>
    </section>
  );
};

export default LoginClient;
