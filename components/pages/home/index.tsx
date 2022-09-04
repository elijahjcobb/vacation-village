import { Container } from "../../shell/max-width-container";
import styles from "./index.module.css";

export function HomePage() {
	return <Container>
		<div className={styles.hero}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src="/background.jpg" alt="aerial image" />
			<div className={styles.dark} />
			<span>{`Beneath the towering maples on the water's edge, you will love calling Vacation Village your home.`}</span>
		</div>
		<div className={styles.padding} />
	</Container >
}