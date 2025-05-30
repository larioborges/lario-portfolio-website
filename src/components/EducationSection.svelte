<script lang="ts">
import {
	education, 
} from '@/data';
import TimelineItem from '@/ui/TimelineItem.svelte';
import {
	Award, 
} from 'lucide-svelte';
import MotionWrapper from '@/motion/MotionWrapper.svelte';
import MotionDiv from '@/motion/MotionDiv.svelte';
import MotionLi from '@/motion/MotionLi.svelte';
</script>

<section
	id="education"
	class="from-muted/10 to-background bg-gradient-to-b py-12"
>
	<div class="container mx-auto max-w-4xl px-6 md:px-4">
		<MotionWrapper>
			<h2 class="mb-8 text-center text-2xl font-bold md:text-left">Education</h2>
		</MotionWrapper>

		<div class="mb-8">
			{#each education as edu, index (`${edu.institution}${edu.period}`)}
				<TimelineItem
					title={`🎓 ${edu.degree}`}
					subtitle={`🏛️ ${edu.institution}`}
					subtitleHref={edu.institutionHref}
					location={edu.location}
					locationHref={edu.locationHref}
					date={edu.period}
					isLast={index === education.length - 1}
					{index}
				>
					{#if edu.achievements && edu.achievements.length > 0}
						<MotionDiv
							class="bg-background/80 dark:bg-card/10 mt-3 rounded-lg border border-yellow-500/20 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10"
							initial={{
								opacity: 0,y: 20,
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
							<div class="mb-3 flex items-center">
								<div
									class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10"
								>
									<Award class="h-4 w-4 text-yellow-500" />
								</div>
								<h4 class="text-sm font-medium">Achievements & Activities</h4>
							</div>
							<ul class="ml-4 list-disc space-y-2 text-sm">
								{#each edu.achievements as achievement, i (`${achievement}-${i}`)}
									<MotionLi
										class="text-muted-foreground relative ml-4 pl-0"
										initial={{
											opacity: 0,
											x: -10,
										}}
										whileInView={{
											opacity: 1,
											x: 0,
										}}
										transition={{
											duration: 0.3,
											delay: 0.1 * i,
										}}
										viewport={{
											once: true, 
										}}
									>
										{achievement}
									</MotionLi>
								{/each}
							</ul>
						</MotionDiv>
					{/if}
				</TimelineItem>
			{/each}
		</div>
	</div>
</section>
