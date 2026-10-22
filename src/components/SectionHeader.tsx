import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
	title: string;
	href?: string;
	linkLabel?: string;
};

const SectionHeader = ({
	title,
	href,
	linkLabel = "View all",
}: SectionHeaderProps) => {
	return (
		<div className="mb-4 flex items-center justify-between gap-3">
			<h2>{title}</h2>
			{href ? (
				<Link
					href={href}
					className="flex items-center gap-1 text-sm font-medium text-primary"
				>
					{linkLabel}
					<ArrowRight className="size-4" />
				</Link>
			) : null}
		</div>
	);
};

export default SectionHeader;
