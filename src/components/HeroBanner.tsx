import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HeroBannerProps = {
	firstName?: string | null;
	continueHref: string;
};

const greetingForHour = (hour: number) => {
	if (hour < 12) return "Good morning";
	if (hour < 18) return "Good afternoon";
	return "Good evening";
};

const HeroBanner = ({
	firstName,
	continueHref,
}: HeroBannerProps) => {
	const greeting = greetingForHour(new Date().getHours());
	const name = firstName?.toUpperCase() || "THERE";

	return (
		<section className="relative overflow-hidden rounded-[24px] bg-hero">
			<div className="relative z-10 flex min-h-[200px] flex-col justify-center gap-3 px-6 py-7 md:max-w-[52%] md:px-8">
				<p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
					{greeting}, {name} 👋🏻
				</p>
				<h1 className="text-[32px] leading-9">Keep going!</h1>
				<p className="max-w-sm text-sm text-muted-foreground">
					You&apos;re closer to your goals than you think.
				</p>
				<p className="max-w-sm text-sm text-muted-foreground">Learn something new today.</p>
				<Link
					href={continueHref}
					className="btn-primary mt-2 w-fit"
				>
					Continue learning
					<ArrowRight className="size-4" />
				</Link>
			</div>
			<div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] md:block">
				<Image
					src="/images/hero-desk.png"
					alt=""
					fill
					className="object-cover object-left"
					priority
					sizes="(min-width: 768px) 40vw, 0px"
				/>
			</div>
		</section>
	);
};

export default HeroBanner;
