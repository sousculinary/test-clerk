import { UserButton } from "@clerk/nextjs";

export default function Index() {
	return (
		<>
			<header>
				<UserButton afterSignOutUrl="/" />
			</header>
			<div>Your page's content can go here.</div>
		</>
	);
}