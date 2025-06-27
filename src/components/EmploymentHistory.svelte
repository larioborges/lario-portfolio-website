<script lang="ts">
import ContentBlock from '@/ui/ContentBlock.svelte';
import Heading from '@/ui/Heading.svelte';
import PageSection from '@/ui/PageSection.svelte';
import TimelineItem from '@/ui/TimelineItem.svelte';

const { pastEmployers } = $props();
</script>

<PageSection>
	{#snippet heading()}
		<Heading icon="💼" text="Employment History" />
	{/snippet}

	{#snippet content()}
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
	{/snippet}
</PageSection>
