const linksInNav = document.querySelectorAll("nav a") as unknown as HTMLLinkElement[];

for (const link of linksInNav)  {
	link.onclick = (): void => {

		const id: string = link.innerHTML.toLowerCase();
		const elementToLink = document.getElementById(id) as HTMLDivElement;
		let pos = elementToLink.offsetTop - 180;
		if (id === "home") pos = 0;
		window.scrollTo({top: pos});

	};
}

document.getElementById("learnMoreButton").onclick = (): void => {
	const elementToLink = document.getElementById("about") as HTMLDivElement;
	let pos = elementToLink.offsetTop - 180;
	window.scrollTo({top: pos});
}