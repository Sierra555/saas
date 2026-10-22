"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "My Courses", href: "/learnings" },
	{ label: "My path", href: "/my-path" },
];
const NavItems = () => {
	const pathName = usePathname();
	return (
		<nav className="flex items-center gap-4">
			{navLinks.map(({ label, href }) => (
				<Link
					key={label}
					href={href}
					className={cn(
						pathName === href &&
							"text-primary font-semibold"
					)}
				>
					{label}
				</Link>
			))}
		</nav>
	);
};

export default NavItems;
