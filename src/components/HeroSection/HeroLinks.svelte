<style lang="postcss">
  @reference "@/styles/global.css";

  :global(.hero-icon) {
		@apply mr-2 h-4 w-4;
	}

	:global(.hero-icon.linked-in) {
		@apply text-blue-600/90;
	}

	:global(.hero-icon.github) {
		@apply text-black dark:text-white;
	}

	:global(.hero-icon.mail) {
		@apply text-green-500;
	}

	:global(.hero-icon.map-pin) {
		@apply text-red-400;
	}

  .location-wrapper {
    @apply text-muted-foreground flex items-center text-sm;
  }

  .wrapper {
    @apply flex flex-col items-center gap-2 md:items-start;
  }
</style>

<script>
	import {
		CHILD_VARIANTS, CONTAINER_VARIANTS,
	} from '@/constants';
	import {
		Mail, MapPin,
	} from 'lucide-svelte';
  import GithubIcon from '@/icons/Github.svelte';
  import LinkedinIcon from '@/icons/LinkedIn.svelte';
	import {
		Motion,
	} from 'svelte-motion';
	import HeroLink from './HeroLink.svelte';

  const {
  	locationFields,
  	email,
  	githubUrl,
  	linkedInUrl,
  } = $props();
</script>

<Motion
	variants={CONTAINER_VARIANTS}
	let:motion
>
	<div
		class="wrapper"
		use:motion
	>
		<Motion
			variants={CHILD_VARIANTS}
			whileHover={{
				scale: 1.05,
				color: '#4b5563',
			}}
			let:motion
		>
			<p
				class="location-wrapper"
				use:motion
			>
				<MapPin class="hero-icon map-pin" />
				{#if locationFields.googleMapsUrl != null}
					<a
						href={locationFields.googleMapsUrl}
						target="_blank"
					>
						{locationFields.name}
					</a>
				{:else}
					<span>{locationFields.name}</span>
				{/if}
			</p>
		</Motion>

		<HeroLink href={`mailto:${email}`}>
			<svelte:fragment>
				<Mail class="hero-icon mail" />
				{email}
			</svelte:fragment>
		</HeroLink>

		<HeroLink href={githubUrl}>
			<svelte:fragment>
				<GithubIcon class="hero-icon github" />
				GitHub
			</svelte:fragment>
		</HeroLink>

		<HeroLink href={linkedInUrl}>
			<svelte:fragment>
				<LinkedinIcon class="hero-icon linked-in" />
				LinkedIn
			</svelte:fragment>
		</HeroLink>
	</div>
</Motion>
