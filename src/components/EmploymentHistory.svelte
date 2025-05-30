<script lang="ts">
import TimelineItem from '@/ui/TimelineItem.svelte';
import MotionWrapper from '@/motion/MotionWrapper.svelte';
import MotionDiv from '@/motion/MotionDiv.svelte';
import MotionSpan from '@/motion/MotionSpan.svelte';
import HtmlElement from '@/ui/HtmlElement.svelte';

const {
	pastEmployers, 
} = $props();
</script>

<section
	id="experience"
	class="from-muted/20 to-background bg-gradient-to-b py-12"
>
	<div class="container mx-auto max-w-4xl px-6 md:px-4">
		<MotionWrapper>
			<h2
				class="mb-8 flex items-center text-center text-2xl font-bold md:inline-block md:text-left"
			>
				<MotionSpan
					class="mr-2 inline-block"
					initial={{
						rotate: 0, 
					}}
					whileInView={{
						rotate: [0, -10, 10, -5, 5, 0], 
					}}
					transition={{
						duration: 0.5,
						delay: 0.2,
					}}
					viewport={{
						once: true, 
					}}
				>
					💼
				</MotionSpan>&nbsp; Employment History
			</h2>
		</MotionWrapper>
		<div class="mb-8">
			{#each pastEmployers as {
				companyName, companyWebsiteUrl, companyLocation, companyGoogleMapsUrl, period, position, description, 
			}, index (`${companyName}-${period}-${index}`)}
				<TimelineItem
					title={`👨‍💻 ${position}`}
					subtitle={companyName}
					subtitleHref={companyWebsiteUrl}
					location={companyLocation}
					locationHref={companyGoogleMapsUrl}
					date={`${period}`}
					isLast={index === pastEmployers.length - 1}
					{index}
				>
					<MotionDiv
						class="bg-background/80 dark:bg-card/10 mt-3 rounded-lg border border-yellow-500/20 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10"
						initial={{
							opacity: 0,
							y: 20,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							delay: 0.2,
						}}
						viewport={{
							once: true, 
						}}
					>
						<HtmlElement content={description} />
					</MotionDiv>
				</TimelineItem>
			{/each}
		</div>
	</div>
</section>
