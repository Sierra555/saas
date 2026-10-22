import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
	return (
		<main className="flex min-h-screen items-center justify-center px-4">
			<SignIn />
		</main>
	);
};

export default SignInPage;
