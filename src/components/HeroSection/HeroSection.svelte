<style lang="postcss">
	@reference "@/styles/global.css";

	.hero-wrapper {
		@apply relative overflow-hidden py-4 md:py-8;

		> div {
			@apply relative z-10 container mx-auto max-w-4xl px-6 md:px-4;
		}
	}

	.hero-links-wrapper {
		@apply mb-8 flex flex-col justify-between md:flex-row md:items-center;
	}
</style>

<script lang="ts">
import nerd from '@/images/nerd.webp';
import type {
	AssetFields,
} from 'contentful';
import {
	Motion,
} from 'svelte-motion';
import {
	CONTAINER_VARIANTS,
} from '@/constants';
	import HeroName from './HeroName.svelte';
	import HeroProfilePic from './HeroProfilePic.svelte';
	import HeroIntro from './HeroIntro.svelte';
	import HeroLinks from './HeroLinks.svelte';

const {
	name,
	profileImage,
	location,
	email,
	githubUrl,
	linkedInUrl,
	intro,
} = $props();

const {
	fields: profileImageFields,
}: {
	fields: AssetFields
} = profileImage;

const {
	fields: locationFields,
} = location;
</script>

<section class="hero-wrapper">
	<div>
		<Motion
			variants={CONTAINER_VARIANTS}
			initial="hidden"
			animate="visible"
			let:motion
		>
			<div
				class="hero-links-wrapper"
				use:motion
			>
				<div class="text-center md:text-left">
					<HeroName {name} jobTitle="Senior Full Stack Web Engineer" img={nerd}  />
					<HeroLinks {email} {linkedInUrl} {githubUrl} {locationFields} />
				</div>

				<HeroProfilePic {profileImageFields} />
			</div>
		</Motion>

		<HeroIntro {intro} />
	</div>
</section>
