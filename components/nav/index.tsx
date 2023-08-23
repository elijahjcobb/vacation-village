"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { Button } from "../button";
import { Icon } from "@/components/icons";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NAV_ITEMS: string[] = [
	'about',
	'community',
	'area',
	'history',
	'rates'
];

export function Nav() {

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener("scroll", onScroll);
	}, []);

	return <div id="about" className={clsx(styles.container, isScrolled && styles.scrolled)}>
		<nav className={styles.nav}>
			<Link className={styles.title} href="/">
				<Icon size={16} />
				<h1>Vacation Village</h1>
			</Link>
			<ul className={styles.list}>
				{NAV_ITEMS.map(item => <li className={styles.item} key={item}><Link className={styles.link} href={`#${item}`}>{item}</Link></li>)}
			</ul>
			<Button href="#contact">Contact</Button>
		</nav>
	</div>
}