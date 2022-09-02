import styles from "./index.module.css";
import { NavBar } from "../nav";
import { PropsWithChildren } from "react";

export function Shell({ children }: PropsWithChildren) {
	return <>
		<NavBar />
		{children}
	</>
}