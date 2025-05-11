import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footerLinksSection}>
          <div className={styles.footerLinksGroup}>
            <h4 className={styles.footerLinksHeading}>Our Stores & Services</h4>
            <ul className={styles.footerLinksContent}>
              <li>
                <Link href="/">Find a Store</Link>
              </li>
              <li>
                <Link href="/">Click & Collect</Link>
              </li>
              <li>
                <Link href="/">Everything's App</Link>
              </li>
              <li>
                <Link href="/">Everything's Brands</Link>
              </li>
              <li>
                <Link href="/">Store Events</Link>
              </li>
              <li>
                <Link href="/">Tell Us What You Think</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerLinksGroup}>
            <h4 className={styles.footerLinksHeading}>Customer Service</h4>
            <ul className={styles.footerLinksContent}>
              <li>
                {" "}
                <Link href="/">Help & FAQs</Link>
              </li>
              <li>
                <Link href="/">Order Tracking</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Shipping & Delivery</Link>
              </li>
              <li>
                <Link href="/">Returns</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerLinksGroup}>
            <h4 className={styles.footerLinksHeading}>Everything's Inc</h4>
            <ul className={styles.footerLinksContent}>
              <li>
                <Link href="/">Corporate Sales</Link>
              </li>
              <li>
                <Link href="/">Corporate Site</Link>
              </li>
              <li>
                <Link href="/">Investors</Link>
              </li>
              <li>
                <Link href="/">Everything's Jobs</Link>
              </li>
              <li>
                <Link href="/">Site Map</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinksGroup}>
            <h4 className={styles.footerLinksHeading}>Follow Us</h4>
            <ul className={styles.footerLinksSocialContent}>
              <li>
                <Link href="/">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.copyRightSection}>
          <p>
            &copy; {new Date().getFullYear()} Everything's Inc. All rights
            reserved.
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
