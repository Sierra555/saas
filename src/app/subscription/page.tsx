import { PricingTable } from "@clerk/nextjs";

const SubscriptionPage = () => {
	return (
		<main className="mx-auto w-full max-w-4xl">
			<p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
				Plans
			</p>
			<h1>Subscription</h1>
			<div className="surface-card mt-4 p-4 md:p-6">
				<PricingTable />
			</div>
		</main>
	);
};

export default SubscriptionPage;
