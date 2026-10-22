"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BookOpen,
	Compass,
	Home,
	Plus,
	X,
} from "lucide-react";
import { cn } from "@/app/lib/utils";

const navLinks = [
	{ label: "Home", href: "/", icon: Home },
	{ label: "My Courses", href: "/learnings", icon: BookOpen },
	{ label: "My path", href: "/my-path", icon: Compass },
];

type AppSidebarProps = {
	open: boolean;
	onClose: () => void;
};

const AppSidebar = ({ open, onClose }: AppSidebarProps) => {
	const pathname = usePathname();

	return (
		<>
			{open ? (
				<button
					type="button"
					aria-label="Close menu"
					className="fixed inset-0 z-40 bg-ink/20 lg:hidden"
					onClick={onClose}
				/>
			) : null}

			<aside
				className={cn(
					"fixed inset-y-0 left-0 z-50 flex w-[240px] flex-col bg-background px-5 py-6 transition-transform lg:static lg:translate-x-0",
					open ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<div className="mb-8 flex items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-2"
						onClick={onClose}
					>
						<span className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
							<BookOpen className="size-4" />
						</span>
						<span className="text-lg font-extrabold tracking-tight text-ink">
							Learnify
						</span>
					</Link>
					<button
						type="button"
						className="rounded-full p-1 text-muted-foreground lg:hidden"
						onClick={onClose}
						aria-label="Close sidebar"
					>
						<X className="size-5" />
					</button>
				</div>

				<nav className="flex flex-col gap-1">
					{navLinks.map(({ label, href, icon: Icon }) => {
						const isActive =
							href === "/"
								? pathname === "/"
								: pathname.startsWith(href);

						return (
							<Link
								key={href}
								href={href}
								onClick={onClose}
								className={cn(
									"flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium text-ink/80",
									isActive &&
										"bg-secondary font-semibold text-primary"
								)}
							>
								<Icon className="size-4" />
								{label}
							</Link>
						);
					})}
				</nav>

				<Link
					href="/learnings/new"
					onClick={onClose}
					className="btn-primary mt-6"
				>
					<Plus className="size-4" />
					New lesson
				</Link>

				<div className="relative mt-auto overflow-hidden rounded-[24px] bg-[#ece7ff] p-5">
					<p className="relative z-10 max-w-[8.5rem] text-sm font-semibold leading-5 text-ink">
						Small steps create big progress
					</p>
					<span className="relative z-10 mt-3 block text-primary">
						♥
					</span>
					<svg
						viewBox="0 0 120 120"
						className="absolute right-[-8px] bottom-[-6px] h-24 w-24"
						aria-hidden
					>
						<ellipse
							cx="78"
							cy="42"
							rx="14"
							ry="28"
							fill="#9bb0c9"
							transform="rotate(28 78 42)"
						/>
						<ellipse
							cx="58"
							cy="58"
							rx="13"
							ry="26"
							fill="#7f97b3"
							transform="rotate(-18 58 58)"
						/>
						<ellipse
							cx="86"
							cy="72"
							rx="12"
							ry="24"
							fill="#a9bdd4"
							transform="rotate(12 86 72)"
						/>
						<path
							d="M48 108 C58 80, 70 70, 86 48"
							fill="none"
							stroke="#7f97b3"
							strokeWidth="2"
						/>
					</svg>
				</div>
			</aside>
		</>
	);
};

export default AppSidebar;
