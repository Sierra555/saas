import { getLearningById } from "@/app/lib/actions/learning.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LearningComponent from "@/app/components/LearningComponent";
import SubjectIcon from "@/app/components/SubjectIcon";

const CompanionSession = async ({
	params,
}: {
	params: Promise<{ id: string }>;
}) => {
	const { id } = await params;
	const learning = await getLearningById(id);
	const user = await currentUser();

	if (!user) redirect("/sign-in");
	if (!learning) redirect("/learnings");

	const { name, topic, subject, duration } = learning;

	return (
		<main>
			<article className="flex justify-between gap-4 rounded-border p-6 max-md:flex-col">
				<div className="flex items-center gap-3">
					<SubjectIcon
						subject={subject}
						size="lg"
						className="max-md:hidden"
					/>

					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-2">
							<p className="text-2xl font-bold">{name}</p>
							<div className="subject-badge bg-secondary max-sm:hidden">
								{subject}
							</div>
						</div>
						<p className="text-muted-foreground">{topic}</p>
					</div>
				</div>
				<div className="text-sm font-semibold text-muted-foreground max-md:hidden">
					{duration} minutes
				</div>
			</article>

			<LearningComponent
				{...learning}
				learningId={id}
				userName={user.firstName!}
				userImage={user.imageUrl!}
			/>
		</main>
	);
};

export default CompanionSession;
