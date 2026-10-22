"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AppSidebar from "./AppSidebar";
import TopBar from "./TopBar";

const AppShell = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	if (pathname.startsWith("/sign-in")) {
		return <>{children}</>;
	}

	return (
		<div className="min-h-screen bg-background lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
			<AppSidebar
				open={open}
				onClose={() => setOpen(false)}
			/>
			<div className="flex min-w-0 flex-col">
				<TopBar onMenu={() => setOpen(true)} />
				<div className="px-4 sm:px-6 lg:px-8">{children}</div>
			</div>
		</div>
	);
};

export default AppShell;
