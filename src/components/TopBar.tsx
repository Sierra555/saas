"use client";

import { Menu } from "lucide-react";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
	useUser,
} from "@clerk/nextjs";
import SearchInput from "./SearchInput";

type TopBarProps = {
	onMenu: () => void;
};

const TopBar = ({ onMenu }: TopBarProps) => {
	const { user } = useUser();

	return (
		<header className="flex items-center gap-4 px-4 py-4 lg:px-8">
			<button
				type="button"
				className="rounded-full p-2 text-ink lg:hidden"
				onClick={onMenu}
				aria-label="Open menu"
			>
				<Menu className="size-5" />
			</button>

			<div className="mx-auto w-full max-w-xl">
				<SearchInput
					placeholder="Search courses, topics, or skills..."
					basePath="/learnings"
				/>
			</div>

			<div className="flex shrink-0 items-center gap-3">
				<SignedOut>
					<SignInButton>
						<button className="btn-signin">Sign in</button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
					{user?.firstName ? (
						<p className="hidden text-sm font-semibold text-ink sm:block">
							{user.firstName}
						</p>
					) : null}
				</SignedIn>
			</div>
		</header>
	);
};

export default TopBar;
