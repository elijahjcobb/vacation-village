import { Container } from "../../shell/max-width-container";

export function RatesPage() {
	return <Container background="/img1.jpg">
		<h1>Rates</h1>
		<section>
			<p>Vacation Village lots range in price from $371 to $417* per month, depending on the location of the lot.</p>
			<p>*These prices do not include the Michigan Mobile Home Tax of $3.00 per month when occupied.</p>
		</section>
		<section>
			<h2>Our rules</h2>
			<p>If you would like to view our rules and regulations please click the link below to view an updated rulebook.</p>
			<a target='_blank' href="https://docs.google.com/document/d/18u_k-eS-a9QPYJJi0_csuJM_-XEcIUQFm4rcVmt7Wsk/edit?usp=sharing" rel="noreferrer">View Rules and Regulations</a>
		</section>
		<section>
			<h2>RENTAL APPLICATION</h2>
			<p>To download our rental application, click the link below. Please make sure that you read our rules and regulations.</p>
			<a target='_blank' href="/application.pdf">View Rental Application</a>
		</section>
	</Container>
}