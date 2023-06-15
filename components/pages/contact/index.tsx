import { Container } from "../../shell/max-width-container";
import styles from "./index.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapPin } from "react-icons/fa";
import type { IconType } from "react-icons";
import { VacationVillageMap } from "../../map";


function ContactItem(props: { icon: IconType, value: string, url: string }) {
	const Icon = props.icon;
	return <div className={styles.item}>
		<Icon className={styles.icon} />
		<a target='_blank' href={props.url} rel="noreferrer">{props.value}</a>
	</div>
}


export function ContactPage() {
	return <Container background="/img5.jpg">
		<h1>Contact</h1>
		<VacationVillageMap />
		<p>Feel free to reach out to us for any issues or inquiries by any of the methods below:</p>
		<ContactItem icon={FaPhoneAlt} value="(231) 409-1986" url="tel:2314091986" />
		<ContactItem icon={FaPhoneAlt} value="(231) 409-3316" url="tel:2314093316" />
		<ContactItem icon={FaPhoneAlt} value="(231) 264-6256" url="tel:2312646256" />
		<ContactItem icon={FaMapPin} value="Golfview Cir, Elk Rapids, MI 49629" url="https://goo.gl/maps/uR21svuAvmDzcreM9" />
		<ContactItem icon={FaEnvelope} value="contact@vacationvillageelkrapids.com" url="mailto:contact@vacationvillageelkrapids.com" />
	</Container>
}