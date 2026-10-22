"use client";

import { useEffect, useState } from "react";
import { subjects } from "../constants";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { useDebounced } from "../lib/hooks";
import {
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";

const SubjectFilter = () => {
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const query = searchParams.get("subject") || "";
	const [subject, setSubject] = useState(query);
	const debouncedQuery = useDebounced(subject);

	useEffect(() => {
		const params = new URLSearchParams(
			searchParams.toString()
		);

		if (debouncedQuery && debouncedQuery !== "all") {
			params.set("subject", debouncedQuery);
		} else {
			params.delete("subject");
		}

		const next = params.toString();
		const nextUrl = next
			? `${pathName}?${next}`
			: pathName;
		const currentUrl = `${pathName}${
			searchParams.toString()
				? `?${searchParams.toString()}`
				: ""
		}`;

		if (nextUrl === currentUrl) return;
		router.push(nextUrl);
	}, [debouncedQuery, pathName, router, searchParams]);

	return (
		<Select
			onValueChange={setSubject}
			value={subject || "all"}
		>
			<SelectTrigger className="h-11 rounded-full border-border bg-white px-4">
				<SelectValue
					placeholder="Select subject"
					className="capitalize"
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectItem
					value="all"
					className="capitalize"
				>
					All subjects
				</SelectItem>
				{subjects.map((subjectOption) => (
					<SelectItem
						key={subjectOption}
						value={subjectOption}
						className="capitalize"
					>
						{subjectOption}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default SubjectFilter;
