<script lang="ts">
import ContentBlock from '@/ui/ContentBlock.svelte';
import Heading from '@/ui/Heading.svelte';
import PageSection from '@/ui/PageSection.svelte';
import TimelineItem from '@/ui/TimelineItem.svelte';

const { certifications } = $props();
</script>

<PageSection>
	{#snippet heading()}
		<Heading icon="🎓" text="Education" />
	{/snippet}

	{#snippet content()}
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
	{/snippet}
</PageSection>
