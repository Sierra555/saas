import Image from "next/image";
import { getSubjectColor } from "@/app/lib/utils";
import { cn } from "@/app/lib/utils";

const sizeMap = {
	sm: { box: "size-10 rounded-xl", icon: 18 },
	md: { box: "size-12 rounded-2xl", icon: 22 },
	lg: { box: "size-14 rounded-2xl", icon: 26 },
} as const;

type SubjectIconProps = {
	subject: string;
	size?: keyof typeof sizeMap;
	className?: string;
};

const SubjectIcon = ({
	subject,
	size = "md",
	className,
}: SubjectIconProps) => {
	const { box, icon } = sizeMap[size];

	return (
		<div
			className={cn(
				"flex items-center justify-center",
				box,
				className
			)}
			style={{ backgroundColor: getSubjectColor(subject, "accent") }}
		>
			<Image	
				src={`/icons/${subject}.svg`}
				alt={subject}
				width={icon}
				height={icon}
			/>
		</div>
	);
};

export default SubjectIcon;
