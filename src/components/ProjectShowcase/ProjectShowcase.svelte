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
</style>

<script lang="ts">
import {
	DEFAULT_ANIMATIONS,
} from '@/constants';
import Heading from '../ui/Heading.svelte';
import ShowCase from './ShowCase.svelte';
import {
	Motion,
} from 'svelte-motion';

const {
	showcaseProjects,
} = $props();
</script>

<section id="projects">
	<div>
		<Motion
			variants={DEFAULT_ANIMATIONS}
			custom={0}
			let:motion
		>
			<div use:motion>
				<Heading icon="🚀" text="Project Showcase" />
			</div>
		</Motion>
		<div class="showcases-wrapper">
			{#each showcaseProjects as project, index (`${project.name}-${index}`)}
					<ShowCase {showcaseProjects} {project} {index} />
			{/each}
		</div>
	</div>
</section>
