import Link from "next/link";
import NavItems from "./NavItems";
import Image from "next/image";
import {
	SignInButton,
	SignOutButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link href="/">
				<Image
					src="/images/logo.png"
					alt="logo"
					width={100}
					height={100}
				/>
			</Link>
			<div className="flex items-center gap-8">
				<NavItems />
				<SignedOut>
					<SignInButton>
						<button className="btn-signin">Sign in</button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
};

export default Navbar;
