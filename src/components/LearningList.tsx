import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn, getSubjectColor } from "@/app/lib/utils";
import { CourseItem } from "../lib/learning";
import SubjectIcon from "./SubjectIcon";
import ProgressBar from "./ProgressBar";
import SectionHeader from "./SectionHeader";

type LearningListProps = {
	title: string;
	learnings?: CourseItem[];
	classNames?: string;
	startedIds?: string[];
	viewAllHref?: string;
};

const LearningList = ({
	title,
	learnings,
	classNames,
	startedIds = [],
	viewAllHref,
}: LearningListProps) => {
	const started = new Set(startedIds);

	return (
		<article className={cn("companion-list", classNames)}>
			{title ? (
				<SectionHeader
					title={title}
					href={viewAllHref}
				/>
			) : null}

			<div className="divide-y divide-border">
				{learnings?.length ? (
					learnings.map(({ id, subject, name }) => {
						const hasStarted = started.has(id);

						return (
							<div
								key={id}
								className="grid grid-cols-1 items-center gap-3 py-3 md:grid-cols-[minmax(0,1.4fr)_160px_88px] lg:grid-cols-[minmax(0,1.5fr)_minmax(140px,1fr)_104px]"
							>
								<div className="flex min-w-0 items-center gap-3">
									<SubjectIcon
										subject={subject}
										size="sm"
									/>
									<p className="truncate font-semibold text-ink">
										{name}
									</p>
									<span className="subject-badge hidden shrink-0 sm:inline-flex" 			
										style={{ backgroundColor: getSubjectColor(subject, "accent") }}
									> 
										{subject}
									</span>
								</div>

								{hasStarted ? (
									<div className="hidden items-center gap-3 md:flex">
										<div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ececf6]">
											<div className="h-full w-2/5 rounded-full bg-[#9b87ff]" />
										</div>
										<span className="w-[4.5rem] shrink-0 text-right text-xs font-medium text-muted-foreground">
											In progress
										</span>
									</div>
								) : (
									<ProgressBar
										value={0}
										className="hidden md:flex"
									/>
								)}

								<Link
									href={`/learnings/${id}`}
									className="btn-primary h-9 gap-1 px-4 text-xs"
								>
									{hasStarted ? "Continue" : "Start"}
									<ChevronRight className="size-3.5" />
								</Link>
							</div>
						);
					})
				) : (
					<p className="py-8 text-sm text-muted-foreground">
						No lessons yet. Create one to get started.
					</p>
				)}
			</div>
		</article>
	);
};

export default LearningList;
