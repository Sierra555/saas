export type CourseItem = {
	id: string;
	name: string;
	topic: string;
	subject: string;
	duration: number;
};

export const isCourseItem = (
	value: unknown
): value is CourseItem => {
	if (!value || typeof value !== "object") return false;

	const row = value as Record<string, unknown>;

	return (
		typeof row.id === "string" &&
		typeof row.name === "string" &&
		typeof row.topic === "string" &&
		typeof row.subject === "string" &&
		typeof row.duration === "number"
	);
};

export const toCourseItem = (
	value: unknown
): CourseItem | null => {
	if (isCourseItem(value)) return value;

	if (!value || typeof value !== "object") return null;

	const row = value as Record<string, unknown>;
	const id =
		typeof row.id === "string"
			? row.id
			: typeof row.$id === "string"
				? row.$id
				: null;

	if (
		!id ||
		typeof row.name !== "string" ||
		typeof row.topic !== "string" ||
		typeof row.subject !== "string"
	) {
		return null;
	}

	const duration =
		typeof row.duration === "number"
			? row.duration
			: Number(row.duration);

	if (!Number.isFinite(duration)) return null;

	return {
		id,
		name: row.name,
		topic: row.topic,
		subject: row.subject,
		duration,
	};
};
