<script lang="ts">
import TimelineItem from '@/ui/TimelineItem.svelte';
import {
	Award,
} from 'lucide-svelte';
import MotionWrapper from '@/motion/MotionWrapper.svelte';
import MotionDiv from '@/motion/MotionDiv.svelte';
import HtmlElement from '@/ui/HtmlElement.svelte';

const {
	certifications,
} = $props()
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
			{#each certifications as certification, index (`${certification.institutionName}${certification.timePeriod}${index}`)}
				<TimelineItem
					title={`🎓 ${certification.certification}`}
					subtitle={`🏛️ ${certification.institutionName}`}
					subtitleHref={certification.institutionWebsiteUrl}
					location={certification.institutionLocation}
					locationHref={certification.institutionGoogleMapsUrl}
					date={certification.timePeriod}
					isLast={index === certifications.length - 1}
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
						<div class="mb-3 flex items-center">
							<div
								class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10"
							>
								<Award class="h-4 w-4 text-yellow-500" />
							</div>
							<h4 class="text-sm font-medium">Achievements & Activities</h4>
						</div>
						<HtmlElement content={certification.description} />
					</MotionDiv>
				</TimelineItem>
			{/each}
		</div>
	</div>
</section>
