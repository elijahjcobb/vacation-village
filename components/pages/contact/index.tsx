import { Container } from "../../shell/max-width-container";
import styles from "./index.module.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import type { IconType } from "react-icons";

function ContactItem(props: { icon: IconType, value: string }) {
	const Icon = props.icon;
	return <div className={styles.item}>
		<Icon className={styles.icon} />
		<p>{props.value}</p>
	</div>
}

export function ContactPage() {
	return <Container>
		<h1>Contact</h1>
		<p>Feel free to reach out to us for any issues or inquiries by any of the methods below:</p>
		<ContactItem icon={FaPhoneAlt} value="(231) 409-2088" />
		<ContactItem icon={FaPhoneAlt} value="(231) 409-3316" />
		<ContactItem icon={FaPhoneAlt} value="(231) 264-6256" />
		<ContactItem icon={FaEnvelope} value="(231) 264-6256" />
	</Container>
}