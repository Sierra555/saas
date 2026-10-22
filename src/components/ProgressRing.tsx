type ProgressRingProps = {
	value: number;
};

const ProgressRing = ({ value }: ProgressRingProps) => {
	const clamped = Math.min(100, Math.max(0, value));
	const radius = 52;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (clamped / 100) * circumference;

	return (
		<div className="relative size-[132px]">
			<svg
				viewBox="0 0 132 132"
				className="size-full -rotate-90"
			>
				<circle
					cx="66"
					cy="66"
					r={radius}
					fill="none"
					stroke="#ece7ff"
					strokeWidth="12"
				/>
				<circle
					cx="66"
					cy="66"
					r={radius}
					fill="none"
					stroke="#9b87ff"
					strokeWidth="12"
					strokeLinecap="round"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
			</svg>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<p className="text-2xl font-bold text-ink">{clamped}%</p>
				<p className="text-[11px] text-muted-foreground">
					Overall progress
				</p>
			</div>
		</div>
	);
};

export default ProgressRing;
