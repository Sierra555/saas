import Link from "next/link";
import { Check, Clock, Star } from "lucide-react";
import { CourseItem } from "../lib/learning";
import ProgressRing from "./ProgressRing";
import ProgressBar from "./ProgressBar";
import SubjectIcon from "./SubjectIcon";
import SectionHeader from "./SectionHeader";
import Cta from "./CTA";

type DashboardWidgetsProps = {
	learnings: CourseItem[];
	startedIds: string[];
	continueLearning?: CourseItem | null;
	upcoming: CourseItem[];
};

const DashboardWidgets = ({
	learnings,
	startedIds,
	continueLearning,
	upcoming,
}: DashboardWidgetsProps) => {
	const total = learnings.length;
	const inProgress = startedIds.length;
	const overall =
		total === 0 ? 0 : Math.round((inProgress / total) * 100);

	return (
		<aside className="flex w-full flex-col gap-4 xl:w-[340px] xl:shrink-0">
			<section className="surface-card p-5">
				<h2 className="mb-4">My learning progress</h2>
				<div className="flex items-center gap-5">
					<ProgressRing value={overall} />
					<div className="flex flex-col gap-4 border-l border-border pl-5">
						<div className="flex items-center gap-3">
							<span className="flex size-9 items-center justify-center rounded-full bg-[#d8f5de] text-[#3d9a5c]">
								<Check className="size-4" />
							</span>
							<div>
								<p className="text-lg font-bold leading-5 text-ink">
									0
								</p>
								<p className="text-xs text-muted-foreground">
									Completed courses
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<span className="flex size-9 items-center justify-center rounded-full bg-[#d7f0ff] text-[#3b82c4]">
								<Clock className="size-4" />
							</span>
							<div>
								<p className="text-lg font-bold leading-5 text-ink">
									{inProgress}
								</p>
								<p className="text-xs text-muted-foreground">
									In progress
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<span className="flex size-9 items-center justify-center rounded-full bg-[#fff3c9] text-[#d39b1e]">
								<Star className="size-4" />
							</span>
							<div>
								<p className="text-lg font-bold leading-5 text-ink">
									0
								</p>
								<p className="text-xs text-muted-foreground">
									Certificates
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="surface-card p-5">
				<SectionHeader
					title="Continue learning"
					href="/learnings"
				/>
				{continueLearning ? (
					<div className="rounded-[20px] border border-border p-4">
						<div className="flex items-start gap-3">
							<SubjectIcon
								subject={continueLearning.subject}
								size="md"
							/>
							<div className="min-w-0">
								<p className="font-semibold text-ink">
									{continueLearning.name}
								</p>
								<span className="subject-badge mt-2 bg-secondary">
									{continueLearning.subject}
								</span>
							</div>
						</div>
						{startedIds.includes(continueLearning.id) ? (
							<div className="mt-4 flex items-center gap-3">
								<div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ececf6]">
									<div className="h-full w-2/5 rounded-full bg-[#9b87ff]" />
								</div>
								<span className="text-xs font-medium text-muted-foreground">
									In progress
								</span>
							</div>
						) : (
							<div className="mt-4">
								<ProgressBar value={0} />
							</div>
						)}
						<Link
							href={`/learnings/${continueLearning.id}`}
							className="btn-primary mt-4 w-full"
						>
							{startedIds.includes(continueLearning.id)
								? "Continue lesson"
								: "Start lesson"}
						</Link>
					</div>
				) : (
					<p className="text-sm text-muted-foreground">
						Start a lesson to see it here.
					</p>
				)}
			</section>

			<section className="surface-card p-5">
				<SectionHeader
					title="Upcoming"
					href="/my-path"
					linkLabel="View calendar"
				/>
				<div className="divide-y divide-border">
					{upcoming.length ? (
						upcoming.map((learning) => (
							<div
								key={learning.id}
								className="flex items-center gap-3 py-3"
							>
								<SubjectIcon
									subject={learning.subject}
									size="sm"
								/>
								<div className="min-w-0 flex-1">
									<p className="truncate text-sm font-semibold text-ink">
										{learning.name}
									</p>
									<p className="text-xs text-muted-foreground capitalize">
										{learning.subject} • {learning.duration}{" "}
										mins
									</p>
								</div>
							</div>
						))
					) : (
						<p className="py-4 text-sm text-muted-foreground">
							No upcoming lessons yet.
						</p>
					)}
				</div>
			</section>

			<Cta />
		</aside>
	);
};

export default DashboardWidgets;
