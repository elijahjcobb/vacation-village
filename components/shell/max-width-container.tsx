import { PropsWithChildren } from "react";
import styles from "./index.module.css";
import cn from "classnames";

export function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
	return <div className={cn(styles.container, className)}>
		{children}
	</div>
}