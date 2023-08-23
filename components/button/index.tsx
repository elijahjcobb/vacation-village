import Link from "next/link";
import styles from "./index.module.css";
import { type DetailedHTMLProps, type ButtonHTMLAttributes, useMemo, ReactNode } from "react";
import clsx from "clsx";

function BaseButton(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
	return <button {...props} />
}

export function Button({
	href,
	onClick,
	children,
	secondary
}: {
	href?: string;
	onClick?: () => void;
	children: ReactNode;
	secondary?: boolean;
}): JSX.Element {
	const Component = useMemo(() => href ? Link : BaseButton, [href]);

	return <Component onClick={onClick} href={href!} className={clsx(styles.button, !secondary && styles.primary, secondary && styles.secondary)} >
		{children}
	</Component>
}