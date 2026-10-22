import CreateLearningForm from "@/app/components/LearningForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewCompanionPage = async () => {
	const { userId } = await auth();

	if (!userId) redirect("/sign-in");

	return (
		<main className="mx-auto w-full max-w-xl">
			<article className="surface-card flex w-full flex-col gap-4 p-6 md:p-8">
				<p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
					Create
				</p>
				<h1>Learning Builder</h1>
				<p className="text-sm text-muted-foreground">
					Pick a name, subject, voice, and personality — then
					start a voice lesson.
				</p>
				<CreateLearningForm />
			</article>
		</main>
	);
};

export default NewCompanionPage;
