enum Subject {
	maths = "maths",
	language = "language",
	science = "science",
	history = "history",
	coding = "coding",
	geography = "geography",
	economics = "economics",
	finance = "finance",
	business = "business",
}

export type Learning =
	Models.DocumentList<Models.Document> & {
		$id: string;
		name: string;
		subject: Subject;
		topic: string;
		duration: number;
		bookmarked: boolean;
	};

export type CreateLearning = {
	name: string;
	subject: string;
	topic: string;
	voice: string;
	style: string;
	duration: number;
};

export type GetAllLearnings = {
	limit?: number;
	page?: number;
	subject?: string | string[];
	topic?: string | string[];
};

export type SearchParams = {
	searchParams: Promise<{
		[key: string]: string | string[];
	}>;
};

export type SavedMessage = {
	role: "user" | "system" | "assistant";
	content: string;
};

export type LearningComponentProps = {
	learningId: string;
	subject: string;
	topic: string;
	name: string;
	userName: string;
	userImage: string;
	voice: string;
	style: string;
};
