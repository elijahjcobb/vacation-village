export interface IconProps {
	size?: number;
}

export function Icon({ size = 32 }: IconProps) {
	return <svg width={size} height={118 / 60 * size} viewBox="0 0 60 118" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_101_492)">
			<path d="M32 51H28V118H32V51Z" fill="var(--black)" />
			<path d="M59.9991 42.0778C60.1945 65.3586 30 84.5 30 84.5C30 84.5 0.196442 65.5104 0.000956294 42.2296C-0.19453 18.9488 29.6461 0 29.6461 0C29.6461 0 59.8036 18.797 59.9991 42.0778Z" fill="url(#paint0_linear_101_492)" />
		</g>
		<defs>
			<linearGradient id="paint0_linear_101_492" x1="30" y1="0" x2="30" y2="84.5" gradientUnits="userSpaceOnUse">
				<stop stopColor="var(--green)" />
				<stop offset="1" stopColor="var(--green-dark)" />
			</linearGradient>
		</defs>
	</svg>

}