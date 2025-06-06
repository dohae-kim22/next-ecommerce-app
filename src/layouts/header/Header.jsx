"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/firebase/firebase";
import { usePathname } from "next/navigation";
import InnerHeader from "../innerHeader/InnerHeader";

const Header = () => {
  const pathName = usePathname();
  const [displayName, setDisplayName] = useState("");

  const logoutUser = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully");
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName !== null) {
          setDisplayName(user.email.split("@")[0].toUpperCase());
        } else {
          setDisplayName(user.displayName);
        }
        // TODO: Save User Info in Redux Store
      } else {
        setDisplayName("");
        // TODO: Remove User Info in Redux Store
      }
    });
  }, []);

  if (
    pathName === "/login" ||
    pathName === "/register" ||
    pathName === "/reset"
  ) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={"/admin/dashboard"}>Admin</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/login"}>Sign In</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/register"}>Create Account</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/order-history"}>My Order</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>

      {pathName.startsWith("/admin") ? null : <InnerHeader />}
    </header>
  );
};

export default Header;
