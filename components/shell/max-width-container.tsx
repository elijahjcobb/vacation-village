import { PropsWithChildren } from "react";
import styles from "./index.module.css";
import cn from "classnames";

export function Container({ children, className, background }: PropsWithChildren<{ background?: string; className?: string }>) {
	return <>
		{/* eslint-disable-next-line @next/next/no-img-element */}
		{background && <img className={styles.background} src={background} alt="vacation village aerial view" />}
		<div className={cn(styles.container, className)} style={{ marginTop: 42 * (background ? -1 : 1) }}>
			{children}
		</div>
	</>
}