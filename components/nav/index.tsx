import Link from "next/link";
import styles from "./index.module.css";
import { Button } from "../button";
import { Icon } from "@/components/icons";

const NAV_ITEMS: string[] = [
	'about',
	'community',
	'area',
	'history',
	'rates'
];

export function Nav() {
	return <nav className={styles.nav}>
		<Link className={styles.title} href="/">
			<Icon size={16} />
			<h1>Vacation Village</h1>
		</Link>
		<ul className={styles.list}>
			{NAV_ITEMS.map(item => <li className={styles.item} key={item}><Link className={styles.link} href={`/#${item}`}>{item}</Link></li>)}
		</ul>
		<Button href="#contact">Contact</Button>
	</nav>
}