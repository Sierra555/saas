import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getSubjectColor } from "@/app/lib/utils";
import SubjectIcon from "./SubjectIcon";

type Learnings = {
	id: string;
	name: string;
	topic: string;
	subject: string;
	duration: number;
	color?: string;
};

const LearningCard = ({
	id,
	name,
	topic,
	subject,
	duration,
	color,
}: Learnings) => {
	return (
		<article
			className="companion-card"
			style={{
				backgroundColor: color || getSubjectColor(subject),
			}}
		>
			<div className="flex items-start justify-between">
				<div className="subject-badge">{subject}</div>
			</div>
			<SubjectIcon
				subject={subject}
				size="lg"
				className="mt-4 bg-white/55"
			/>
			<div className="mt-4 flex flex-1 flex-col">
				<h3 className="text-lg leading-6 font-bold text-ink">
					{name}
				</h3>
				<p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
					{topic}
				</p>
			</div>
			<div className="mt-5 flex items-center justify-between">
				<p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
					<Clock className="size-3.5" />
					{duration} mins
				</p>
				<Link
					href={`/learnings/${id}`}
					aria-label={`Open ${name}`}
					className="flex size-8 items-center justify-center rounded-full bg-white/70 text-ink"
				>
					<ArrowRight className="size-4" />
				</Link>
			</div>
		</article>
	);
};

export default LearningCard;
