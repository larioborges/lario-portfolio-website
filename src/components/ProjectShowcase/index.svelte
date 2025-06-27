<script lang="ts">
import Heading from '@/ui/Heading.svelte';
import PageSection from '@/ui/PageSection.svelte';
import ShowCase from './ShowCase.svelte';

const { showcaseProjects } = $props();
</script>

<PageSection>
	{#snippet heading()}
		<Heading icon="🚀" text="Project Showcase" />
	{/snippet}

	{#snippet content()}
		{#each showcaseProjects as project, index (`${project.name}-${index}`)}
			<ShowCase {showcaseProjects} {project} {index} />
		{/each}
	{/snippet}
</PageSection>
