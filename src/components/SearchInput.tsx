"use client";

import {
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useDebounced } from "../lib/hooks";

type SearchInputProps = {
	placeholder?: string;
	basePath?: string;
};

const SearchInput = ({
	placeholder = "Search learnings...",
	basePath,
}: SearchInputProps) => {
	const pathName = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("topic") || "";
	const targetPath = basePath || pathName;

	const [searchQuery, setSearchQuery] = useState(query);
	const debouncedQuery = useDebounced(searchQuery);

	useEffect(() => {
		setSearchQuery(query);
	}, [query]);

	useEffect(() => {
		const params = new URLSearchParams(
			searchParams.toString()
		);

		if (debouncedQuery) {
			params.set("topic", debouncedQuery);
		} else {
			params.delete("topic");
		}

		const nextQuery = params.toString();
		const nextUrl = nextQuery
			? `${targetPath}?${nextQuery}`
			: targetPath;
		const currentUrl = `${pathName}${
			searchParams.toString()
				? `?${searchParams.toString()}`
				: ""
		}`;

		if (nextUrl === currentUrl) return;
		if (targetPath !== pathName && !debouncedQuery) return;

		router.push(nextUrl);
	}, [
		debouncedQuery,
		pathName,
		router,
		searchParams,
		targetPath,
	]);

	return (
		<div className="flex h-11 w-full items-center gap-2 rounded-full bg-[#f3f3fb] px-4">
			<Search className="size-4 text-muted-foreground" />
			<input
				placeholder={placeholder}
				className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted-foreground"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
