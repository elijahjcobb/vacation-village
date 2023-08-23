import { ReactNode } from "react";
import type { IconType } from "react-icons";
import styles from "./index.module.css";
import { COPY } from "@/lib/copy";

function Card({
	title,
	children,
	icon: Icon,
}: {
	title: string;
	children: ReactNode;
	icon: IconType;
}): JSX.Element {
	return <div className={styles.card}>
		<div className={styles.iconContainer}>
			<Icon className={styles.icon} />
		</div>
		<span className={styles.cardTitle}>{title}</span>
		<div className={styles.divider} />
		<p className={styles.cardContent}>{children}</p>
	</div>
}

export function About() {
	return <section className={styles.about}>
		<h2>{COPY.about.heading}</h2>
		<span className={styles.title}>{COPY.about.title}</span>
		<span className={styles.subtitle}>{COPY.about.subtitle}</span>
		<div className={styles.cards}>
			{COPY.about.cards.map(card => <Card key={card.title} title={card.title} icon={card.icon}>{card.content}</Card>)}
		</div>
	</section >
}