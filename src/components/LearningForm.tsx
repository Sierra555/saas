"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/app/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Select } from "@/app/components/ui/select";
import {
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/app/components/ui/select";
import { subjects } from "../constants";
import { Textarea } from "./ui/textarea";
import { createLearning } from "../lib/actions/learning.actions";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const formSchema = z.object({
	name: z.string().min(1, { message: "Name is requried." }),
	subject: z
		.string()
		.min(1, { message: "Subject is requried." }),
	topic: z
		.string()
		.min(1, { message: "Topic is requried." }),
	voice: z
		.string()
		.min(1, { message: "Voice is requried." }),
	style: z
		.string()
		.min(1, { message: "Style is requried." }),
	duration: z
		.number()
		.min(1, { message: "Duration is requried." }),
});
const CreateLearningForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			subject: "",
			topic: "",
			voice: "",
			style: "",
			duration: 15,
		},
	});

	const handleOnSubmit = async (
		values: z.infer<typeof formSchema>
	) => {
		const learning = await createLearning(values);

		if (learning) {
			redirect(`/learnings/${learning.id}`);
		} else {
			toast.error("Something went wrong, try again");
		}
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleOnSubmit)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter learning name"
									{...field}
									className="input"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subject</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									value={field.value}
									defaultValue={field.value}
								>
									<SelectTrigger className="input capitalize">
										<SelectValue placeholder="Select subject" />
									</SelectTrigger>
									<SelectContent>
										{subjects.map((subject) => (
											<SelectItem
												key={subject}
												value={subject}
												className="capitalize"
											>
												{subject}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="topic"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								What should it help with?
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Enter the topic you want to learn - ex: Derivatives"
									{...field}
									className="input"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="voice"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Voice</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									value={field.value}
									defaultValue={field.value}
								>
									<SelectTrigger className="input">
										<SelectValue placeholder="Select the voice" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="male">
											Male
										</SelectItem>
										<SelectItem value="female">
											Female
										</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="style"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Style</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									value={field.value}
									defaultValue={field.value}
								>
									<SelectTrigger className="input">
										<SelectValue placeholder="Select the style" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="formal">
											Formal
										</SelectItem>
										<SelectItem value="casual">
											Casual
										</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="duration"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Estimated session duration in minutes
							</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="15"
									{...field}
									className="input"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="btn-primary h-11 w-full"
					disabled={form.formState.isSubmitting}
				>
					{form.formState.isSubmitting
						? "Building..."
						: "Build Your Learning"}
				</Button>
			</form>
		</Form>
	);
};

export default CreateLearningForm;
