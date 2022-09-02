import Link from 'next/link';
import { Icon } from '../icons/icon';
import styles from './index.module.css';

const LINKS = [
	{ path: "/", name: "home" },
	{ path: "/about", name: "about" },
	{ path: "/rates", name: "rates" },
	{ path: "/contact", name: "contact" },
]

export function NavBar() {
	return <nav className={styles.nav}>
		<Link href='/'>
			<div className={styles.header}>
				<Icon size={18} />
				<span className={styles.title}>Vacation Village</span>
			</div>
		</Link>
		<ol className={styles.links}>
			{LINKS.map(({ path, name }) => (
				<li key={path}>
					<Link
						href={path}
						passHref>
						<a className={styles.link}>{name}</a>
					</Link>
				</li>
			))}
		</ol>
	</nav>
}