import Image from "next/image";
import backgroundImage from "../../public/background.jpg";
import styles from "./index.module.css";
import { NavBar } from "../../nav";

export function HomePage() {
	return <div>
		<NavBar />
		<div className={styles.background} />
	</div>
}