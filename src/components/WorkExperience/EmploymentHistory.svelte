<script lang="ts">
	import { employmentHistory } from '../../data';
	import TimelineItem from '../ui/TimelineItem.svelte';
	import { Star } from 'lucide-svelte';
	import MotionWrapper from '../MotionWrapper.svelte';
	import MotionDiv from '../motion/MotionDiv.svelte';
	import MotionSpan from '../motion/MotionSpan.svelte';
	import MotionLi from '../motion/MotionLi.svelte';
</script>

<section
	id="experience"
	class="from-muted/20 to-background bg-gradient-to-b py-12"
>
	<div class="container mx-auto max-w-4xl px-6 md:px-4">
		<MotionWrapper>
			<h2 class="mb-8 flex items-center text-center text-2xl font-bold md:inline-block md:text-left">
				<MotionSpan
					class="mr-2 inline-block"
					initial={{ rotate: 0 }}
					whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					💼
				</MotionSpan>&nbsp; Employment History
			</h2>
		</MotionWrapper>
		<div class="mb-8">
			{#each employmentHistory as job, index (`${job.company}-${job.period}`)}
				<TimelineItem
					title={`👨‍💻 ${job.position}`}
					subtitle={job.company}
					location={job.location}
					date={`${job.period}`}
					isLast={index === employmentHistory.length - 1}
					{index}
				>
					<MotionDiv
						class="bg-background/80 dark:bg-card/10 mt-3 rounded-lg border border-yellow-500/20 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div class="mb-3 flex items-center">
							<div class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10">
								<Star class="h-4 w-4 text-yellow-500" />
							</div>
							<h4 class="text-sm font-medium">Key Achievements</h4>
						</div>
						<ul class="list-circle ml-4 space-y-2 text-sm">
							{#each job.summary as item, i (`${item}-${i}`)}
								<MotionLi
									class="text-muted-foreground relative pl-2"
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.1 * i }}
									viewport={{ once: true }}
								>
									{item}
								</MotionLi>
							{/each}
						</ul>
					</MotionDiv>
				</TimelineItem>
			{/each}
		</div>
	</div>
</section>
