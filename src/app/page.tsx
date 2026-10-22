import { currentUser } from "@clerk/nextjs/server";
import LearningCard from "../components/LearningCard";
import HeroBanner from "../components/HeroBanner";
import DashboardWidgets from "../components/DashboardWidgets";
import MyCoursesSection from "../components/MyCoursesSection";
import SectionHeader from "../components/SectionHeader";
import {
	getAllLearnings,
	getUserSessions,
} from "../lib/actions/learning.actions";
import { getSubjectColor } from "../lib/utils";
import { toCourseItem } from "../lib/learning";

export default async function Home() {
	const user = await currentUser();
	const learningsRaw =[{}];
	const sessionRaw = user
		? await getUserSessions(user.id, 20)
		: [];

	const learnings = learningsRaw
		.map(toCourseItem)
		.filter((item) => item !== null);
	const startedIds = [
		...new Set(
			sessionRaw
				.map(toCourseItem)
				.filter((item) => item !== null)
				.map((item) => item.id)
		),
	];

	const featured = learnings.slice(0, 4);
	const continueLearning =
		learnings.find((item) => startedIds.includes(item.id)) ||
		learnings[0] ||
		null;
	const upcoming = learnings
		.filter((item) => item.id !== continueLearning?.id)
		.slice(0, 3);
	const continueHref = continueLearning
		? `/learnings/${continueLearning.id}`
		: "/learnings";

	return (
		<main>
			<div className="flex flex-col gap-6 xl:flex-row">
				<div className="min-w-0 flex-1 space-y-6">
					<HeroBanner
						firstName={user?.firstName}
						continueHref={continueHref}
					/>

					<section>
						<SectionHeader
							title="Featured Courses"
							href="/learnings"
						/>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
							{featured.map((data) => (
								<LearningCard
									key={data.id}
									{...data}
									color={getSubjectColor(data.subject)}
								/>
							))}
						</div>
					</section>

					<MyCoursesSection
						learnings={learnings}
						startedIds={startedIds}
					/>
				</div>

				<DashboardWidgets
					learnings={learnings}
					startedIds={startedIds}
					continueLearning={continueLearning}
					upcoming={upcoming}
				/>
			</div>
		</main>
	);
}
