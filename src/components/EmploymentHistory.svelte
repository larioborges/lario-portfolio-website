<style lang="postcss">
@reference "@/styles/global.css";

#experience {
	@apply from-muted/20 to-background bg-gradient-to-b py-12;

	> div {
		@apply container mx-auto max-w-4xl px-6 md:px-4;
	}

	.content-wrapper {
		@apply mb-8;
	}
}
</style>

<script lang="ts">
import TimelineItem from '@/ui/TimelineItem.svelte';
import ContentBlock from '@/ui/ContentBlock.svelte';
import Heading from '@/ui/Heading.svelte';

const {
	pastEmployers,
} = $props();
</script>

<section
	id="experience"
>
	<div>
		<div class="heading-wrapper">
			<Heading icon="💼" text="Employment History" />
		</div>
		<div class="content-wrapper">
			{#each pastEmployers as {
				companyName,
				companyWebsiteUrl,
				companyLocation,
				companyGoogleMapsUrl,
				period,
				position,
				description,
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
					<ContentBlock content={description} />
				</TimelineItem>
			{/each}
		</div>
	</div>
</section>
