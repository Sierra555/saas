import Link from "next/link";
import { Heart } from "lucide-react";

const Cta = () => {
	return (
		<Link
			href="/learnings/new"
			className="cta-section"
		>
			<div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#fff4c4]">
				<svg
					viewBox="0 0 48 48"
					className="size-8"
					aria-hidden
				>
					<path
						d="M24 36c0-8 6-14 6-20a6 6 0 1 0-12 0c0 6 6 12 6 20Z"
						fill="#6f8f63"
					/>
					<path
						d="M18 16c-4 2-8 8-8 12 6-1 10-5 12-10"
						fill="#5d7b54"
					/>
					<path
						d="M30 16c4 2 8 8 8 12-6-1-10-5-12-10"
						fill="#7ea072"
					/>
				</svg>
			</div>
			<div className="min-w-0 flex-1">
				<p className="font-bold text-ink">
					Progress, not perfection
				</p>
				<p className="text-sm text-muted-foreground">
					You&apos;re doing great! Build a new lesson.
				</p>
			</div>
			<Heart className="size-5 fill-[#ff6b9d] text-[#ff6b9d]" />
		</Link>
	);
};

export default Cta;
