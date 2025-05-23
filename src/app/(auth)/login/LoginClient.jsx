"use client";

import React, { useState } from "react";
import styles from "./Auth.module.scss";
import Image from "next/image";
import LogoPath from "@/assets/shop-logo.png";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";
import Link from "next/link";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";

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

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setIsLoading(false);
          toast.success("Login successful");
          redirectUser();
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login successful");
          redirectUser();
        }
      })
      .catch((error) => {
        toast.error(error.message);
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

        <form className={styles.form} onSubmit={loginUser}>
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
          </div>
          <div className={styles.optionGroup}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="autoSignIn"
                checked={isAutoLogin}
                onChange={(e) => setIsAutoLogin(e.target.checked)}
              />
              <label htmlFor="autoSignIn">Remember Me</label>
            </div>
            <Link href={"/reset"}>Forgot Password {">"}</Link>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit">Sign In</button>
            <button type="button" onClick={signInWithGoogle}>
              <Image
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                width={25}
                height={25}
                className={styles.googleLogo}
              />
              Sign In with Google
            </button>
            <button type="button" className={styles.secondaryButton}>
              <Link href={"/register"}>Create Account</Link>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginClient;
