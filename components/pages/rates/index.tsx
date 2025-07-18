import { Container } from "../../shell/max-width-container";

export function RatesPage() {
	return <Container background="/img1.jpg">
		<h1>Rates</h1>
		<section>
			<p>Vacation Village lots are $550* per month.</p>
			<p>*These prices do not include the Michigan Mobile Home Tax of $3.00 per month when occupied.</p>
		</section>
		<section>
			<h2>Our rules</h2>
			<p>If you would like to view our rules and regulations please click the link below to view an updated rulebook.</p>
			<a target='_blank' href="/Rules_and_Regulations.pdf" rel="noreferrer">View Rules and Regulations</a>
		</section>
		<section>
			<h2>RENTAL APPLICATION</h2>
			<p>To download our rental application, click the link below. Please make sure that you read our rules and regulations.</p>
			<a target='_blank' rel="noreferrer" href="https://docs.google.com/document/d/1QNXNghUU1YgKmWsnXtMlvFB3w8lWMaWcvluE1lv2jfc/edit?usp=sharing">View Rental Application</a>
		</section>
	</Container>
}
