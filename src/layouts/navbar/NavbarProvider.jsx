"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import styles from "./NavbarProvider.module.scss";

const NavbarProvider = ({ children }) => {
	const pathName = usePathname();
	const isAdmin = pathName.startsWith("/admin");

	return (
		<div className={styles.container}>
			{isAdmin ? (
				<div className={styles.navbarContainer}>
					<div className={styles.navbar}>
						<Navbar />
					</div>
					<div className={styles.content}>{children}</div>
				</div>
			) : (
				<>{children}</>
			)}
		</div>
	);
};

export default NavbarProvider;
