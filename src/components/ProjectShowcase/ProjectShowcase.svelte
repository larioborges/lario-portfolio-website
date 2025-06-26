<style lang="postcss">
	@reference "@/styles/global.css";
	#projects {
		@apply from-muted/20 to-background bg-gradient-to-b py-12;

		> div {
			@apply container mx-auto max-w-4xl px-6 md:px-4;
		}

		.showcases-wrapper {
			@apply mb-8;
		}
	}
	.heading-wrapper {
		@apply mb-3 flex items-center;
	}
</style>

<script lang="ts">
import Heading from '../ui/Heading.svelte';
import ShowCase from './ShowCase.svelte';

const {
	showcaseProjects,
} = $props();
</script>

<section id="projects">
	<div>
		<div class="heading-wrapper">
			<Heading icon="🚀" text="Project Showcase" />
		</div>
		<div class="showcases-wrapper">
			{#each showcaseProjects as project, index (`${project.name}-${index}`)}
					<ShowCase {showcaseProjects} {project} {index} />
			{/each}
		</div>
	</div>
</section>
