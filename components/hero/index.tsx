import { COPY } from "@/lib/copy";
import { Button } from "../button";
import styles from "./index.module.css";
import Image from "next/image";
import primaryImageSrc from "@/public/img4.jpg";
import secondaryImageSrc from "@/public/img7.jpg";

export function Hero() {
	return <section className={styles.hero}>
		<div className={styles.blob1} />
		<div className={styles.blob2} />
		<div className={styles.content}>
			<span className={styles.title}>{COPY.hero.title}</span>
			<span className={styles.subtitle}>{COPY.hero.subtitle}</span>
			<div className={styles.buttons}>
				<Button>Apply</Button>
				<Button secondary>Rates from ${COPY.price.low}/m</Button>
			</div>
		</div>
		<div className={styles.images}>
			<Image src={primaryImageSrc} alt='vacation village aerial' className={styles.primaryImage} />
			<Image src={secondaryImageSrc} alt='vacation village aerial' className={styles.secondaryImage} />
		</div>
	</section>
}