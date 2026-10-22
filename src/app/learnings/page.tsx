import LearningCard from "@/app/components/LearningCard";
import SubjectFilter from "@/app/components/SubjectFilter";
import { getAllLearnings } from "@/app/lib/actions/learning.actions";
import { getSubjectColor } from "@/app/lib/utils";
import { SearchParams } from "@/app/types";
import Link from "next/link";
import { Plus } from "lucide-react";

const LearningsLibrary = async ({
	searchParams,
}: SearchParams) => {
	const filters = await searchParams;
	const { subject = "", topic = "" } = filters;

	const learnings = await getAllLearnings({
		subject,
		topic,
	});

	return (
		<main>
			<section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
				<div>
					<p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
						Library
					</p>
					<h1>My Courses</h1>
				</div>
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
					<SubjectFilter />
					<Link
						href="/learnings/new"
						className="btn-primary"
					>
						<Plus className="size-4" />
						New lesson
					</Link>
				</div>
			</section>
			<section className="companions-grid">
				{learnings.map((learning) => (
					<LearningCard
						key={learning.id}
						{...learning}
						color={getSubjectColor(learning.subject)}
					/>
				))}
			</section>
		</main>
	);
};

export default LearningsLibrary;
