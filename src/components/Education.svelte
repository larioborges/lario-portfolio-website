<style lang="postcss">
	@reference "@/styles/global.css";

	#education {
		@apply from-muted/10 to-background bg-gradient-to-b py-12;

		> div {
			@apply container mx-auto max-w-4xl px-6 md:px-4;
		}

		.heading {
			@apply mb-8 text-center text-2xl font-bold md:text-left;
		}

		.certs-wrapper {
			@apply mb-8;
		}
	}
	.heading-wrapper {
		@apply mb-3 flex items-center;
	}
</style>

<script lang="ts">
import TimelineItem from '@/ui/TimelineItem.svelte';
import ContentBlock from '@/ui/ContentBlock.svelte';
import Heading from '@/ui/Heading.svelte';

const {
	certifications,
} = $props();
</script>

<section id="education">
	<div>
		<div class="heading-wrapper">
			<Heading icon="🎓" text="Education" />
		</div>

		<div class="certs-wrapper">
			{#each certifications as
				{
					certification, timePeriod, institutionName, institutionWebsiteUrl, institutionLocation, institutionGoogleMapsUrl, description,
				}, index (`${certification}-${timePeriod}`)}
					<TimelineItem
						title={`🎓 ${certification}`}
						subtitle={`🏛️ ${institutionName}`}
						subtitleHref={institutionWebsiteUrl}
						location={institutionLocation}
						locationHref={institutionGoogleMapsUrl}
						date={timePeriod}
						isLast={index === certifications.length - 1}
						{index}
					>
						<ContentBlock content={description} />
					</TimelineItem>
			{/each}
		</div>
	</div>
</section>
