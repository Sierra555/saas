import { cn } from "@/app/lib/utils";

type ProgressBarProps = {
	value: number;
	className?: string;
	showLabel?: boolean;
};

const ProgressBar = ({
	value,
	className,
	showLabel = true,
}: ProgressBarProps) => {
	const clamped = Math.min(100, Math.max(0, value));

	return (
		<div className={cn("flex items-center gap-3", className)}>
			<div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ececf6]">
				<div
					className="h-full rounded-full bg-[#9b87ff]"
					style={{ width: `${clamped}%` }}
				/>
			</div>
			{showLabel ? (
				<span className="w-8 shrink-0 text-right text-xs font-medium text-muted-foreground">
					{clamped}%
				</span>
			) : null}
		</div>
	);
};

export default ProgressBar;
