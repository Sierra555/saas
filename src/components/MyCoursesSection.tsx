"use client";

import { useMemo, useState } from "react";
import { cn } from "@/app/lib/utils";
import { CourseItem } from "../lib/learning";
import LearningList from "./LearningList";
import SectionHeader from "./SectionHeader";

const tabs = [
	{ id: "all", label: "All" },
	{ id: "progress", label: "In Progress" },
	{ id: "completed", label: "Completed" },
] as const;

type CourseTab = (typeof tabs)[number]["id"];

type MyCoursesSectionProps = {
	learnings: CourseItem[];
	startedIds: string[];
};

const MyCoursesSection = ({
	learnings,
	startedIds,
}: MyCoursesSectionProps) => {
	const [tab, setTab] = useState<CourseTab>("all");
	const started = useMemo(
		() => new Set(startedIds),
		[startedIds]
	);

	const filtered = learnings.filter((learning) => {
		if (tab === "progress") return started.has(learning.id);
		if (tab === "completed") return false;
		return true;
	});

	return (
		<section>
			<SectionHeader
				title="My Courses"
				href="/learnings"
			/>
			<div className="mb-2 flex items-center gap-5 text-sm">
				{tabs.map(({ id, label }) => (
					<button
						key={id}
						type="button"
						onClick={() => setTab(id)}
						className={cn(
							"relative pb-2 font-medium text-muted-foreground",
							tab === id && "font-semibold text-primary"
						)}
					>
						{label}
						{tab === id ? (
							<span className="absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-primary" />
						) : null}
					</button>
				))}
			</div>
			<LearningList
				title=""
				learnings={filtered}
				startedIds={startedIds}
			/>
		</section>
	);
};

export default MyCoursesSection;
