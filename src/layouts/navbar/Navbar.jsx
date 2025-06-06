"use client";

import { selectUserName } from "@/redux/slice/authSlice";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
	const pathName = usePathname();
	const userName = useSelector(selectUserName) || 'Admin';

	return (
		<div className={styles.navbar}>
			<div className={styles.user}>
				<FaUserCircle size={40} color="#fff" />
				<h4>Welcome, {userName}</h4>
			</div>
			<nav>
				<ul>
					<li><Link href={'/admin/dashboard'}>Dashboard</Link></li>
					<li><Link href={'/admin/all-products'}>All Products</Link></li>
					<li><Link href={'/admin/add-product'}>Add Product</Link></li>
					<li><Link href={'/admin/orders'}>Orders</Link></li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
