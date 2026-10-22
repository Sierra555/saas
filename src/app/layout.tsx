import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "../components/AppShell";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

const plusJakarta = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Learnify",
	description: "Real-time AI studying platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${plusJakarta.variable} antialiased`}
			>
				<ClerkProvider
					appearance={{
						variables: { colorPrimary: "#7B6CFF" },
					}}
				>
					<ToastContainer />
					<AppShell>{children}</AppShell>
				</ClerkProvider>
			</body>
		</html>
	);
}
