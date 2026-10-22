import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import SubjectIcon from "@/app/components/SubjectIcon";
import {
	getAllLearnings,
	getUserSessions,
} from "@/app/lib/actions/learning.actions";
import { toCourseItem } from "@/app/lib/learning";

const LearningPathPage = async () => {
	const user = await currentUser();
	if (!user) redirect("/sign-in");

	const [sessionRaw, learningsRaw] = await Promise.all([
		getUserSessions(user.id, 20),
		getAllLearnings({ limit: 10 }),
	]);

	const history = sessionRaw
		.map(toCourseItem)
		.filter((item) => item !== null);
	const startedIds = new Set(history.map((item) => item.id));
	const upNext = learningsRaw
		.map(toCourseItem)
		.filter((item) => item !== null)
		.filter((item) => !startedIds.has(item.id));

	return (
		<main>
			<p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
				Your journey
			</p>
			<h1>My path</h1>
			<p className="max-w-xl text-sm text-muted-foreground">
				Lessons you have started, followed by what you can
				take on next.
			</p>

			<section className="surface-card p-6">
				<h2 className="mb-4">Recently started</h2>
				<div className="divide-y divide-border">
					{history.length ? (
						history.map((learning) => (
							<Link
								key={learning.id}
								href={`/learnings/${learning.id}`}
								className="flex items-center gap-3 py-3"
							>
								<SubjectIcon
									subject={learning.subject}
									size="sm"
								/>
								<div className="min-w-0 flex-1">
									<p className="font-semibold text-ink">
										{learning.name}
									</p>
									<p className="text-xs text-muted-foreground capitalize">
										{learning.subject} • {learning.duration}{" "}
										mins
									</p>
								</div>
								<span className="text-xs font-medium text-primary">
									Continue
								</span>
							</Link>
						))
					) : (
						<p className="py-6 text-sm text-muted-foreground">
							You have not started a lesson yet.
						</p>
					)}
				</div>
			</section>

			<section className="surface-card p-6">
				<h2 className="mb-4">Up next</h2>
				<div className="divide-y divide-border">
					{upNext.length ? (
						upNext.map((learning) => (
							<Link
								key={learning.id}
								href={`/learnings/${learning.id}`}
								className="flex items-center gap-3 py-3"
							>
								<SubjectIcon
									subject={learning.subject}
									size="sm"
								/>
								<div className="min-w-0 flex-1">
									<p className="font-semibold text-ink">
										{learning.name}
									</p>
									<p className="text-xs text-muted-foreground capitalize">
										{learning.subject} • {learning.duration}{" "}
										mins
									</p>
								</div>
								<span className="text-xs font-medium text-ink">
									Start
								</span>
							</Link>
						))
					) : (
						<p className="py-6 text-sm text-muted-foreground">
							You are caught up. Create a new lesson to keep
							going.
						</p>
					)}
				</div>
			</section>
		</main>
	);
};

export default LearningPathPage;
