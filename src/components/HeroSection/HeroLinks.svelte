<style lang="postcss">
  @reference "@/styles/global.css";

  :global(.hero-icon) {
		@apply mr-2 h-4 w-4;
	}

  .wrapper {
    @apply flex flex-col items-center gap-2 md:items-start;
  }
</style>

<script lang=ts>
import { Motion } from 'svelte-motion';
import { CONTAINER_VARIANTS } from '@/constants';
import GithubIcon from '@/icons/Github.svelte';
import LinkedinIcon from '@/icons/LinkedIn.svelte';
import Mail from '@/icons/Mail.svelte';
import HeroLink from './HeroLink.svelte';
import HeroLocation from './HeroLocation.svelte';

const { locationFields, email, githubUrl, linkedInUrl } = $props();
</script>

<Motion
	variants={CONTAINER_VARIANTS}
	let:motion
>
	<div
		class="wrapper"
		use:motion
	>
		<HeroLocation {locationFields} />

		<HeroLink href={`mailto:${email}`}>
			<svelte:fragment>
				<Mail class="hero-icon" />
				{email}
			</svelte:fragment>
		</HeroLink>

		<HeroLink href={githubUrl}>
			<svelte:fragment>
				<GithubIcon class="hero-icon" />
				GitHub
			</svelte:fragment>
		</HeroLink>

		<HeroLink href={linkedInUrl}>
			<svelte:fragment>
				<LinkedinIcon class="hero-icon" />
				LinkedIn
			</svelte:fragment>
		</HeroLink>
	</div>
</Motion>
