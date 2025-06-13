<style lang="postcss">
	@reference "@/styles/global.css";

	.hero-wrapper {
		@apply relative overflow-hidden py-4 md:py-8;

		> div {
			@apply relative z-10 container mx-auto max-w-4xl px-6 md:px-4;
		}
	}
</style>

<script lang="ts">
import {
	Mail, MapPin,
} from 'lucide-svelte';
import GithubIcon from '@/icons/Github.svelte';
import LinkedInIcon from '@/icons/LinkedIn.svelte';
import nerd from '@/images/nerd.webp';
import type {
	AssetFields,
} from 'contentful';
import HtmlElement from '@/ui/HtmlElement.svelte';
import {
	Motion,
} from 'svelte-motion';

const CONTAINER_VARIANTS = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const CHILD_VARIANTS = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.2,
		},
	},
};

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
				class="mb-8 flex flex-col justify-between md:flex-row md:items-center"
				use:motion
			>
				<div class="text-center md:text-left">
					<Motion
						variants={CHILD_VARIANTS}
						let:motion
					>
						<h1
							class="mb-2 text-4xl font-bold"
							use:motion
						>
							{name} <span class="inline-block animate-pulse"></span>
							<Motion
								initial={{
									rotate: 0,
								}}
								whileHover={{
									rotate: 360,
								}}
								transition={{
									duration: 0.3,
								}}
								let:motion
							>
								<img
									alt="nerd"
									src={nerd.src}
									width="45px"
									height="45px"
									class="ml-3 inline-block align-middle"
									use:motion
								/>
							</Motion>
						</h1>
					</Motion>

					<Motion
						variants={CHILD_VARIANTS}
						let:motion
					>
						<p
							class="text-muted-foreground mb-6 text-xl"
							use:motion
						>
							Senior Full Stack Web Engineer
						</p>
					</Motion>

					<Motion
						variants={CONTAINER_VARIANTS}
						let:motion
					>
						<div
							class="flex flex-col items-center gap-2 md:items-start"
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
									class="text-muted-foreground flex items-center text-sm"
									use:motion
								>
									<MapPin class="mr-2 h-4 w-4 text-red-400" />
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

							<Motion
								variants={CHILD_VARIANTS}
								whileHover={{
									scale: 1.05,
									color: '#4b5563',
								}}
								let:motion
							>
								<a
									href={`mailto:${email}`}
									class="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
									use:motion
								>
									<Mail class="mr-2 h-4 w-4 text-green-500" />
									{email}
								</a>
							</Motion>

							<Motion
								variants={CHILD_VARIANTS}
								whileHover={{
									scale: 1.05,
									color: '#4b5563',
								}}
								let:motion
							>
								<a
									href={githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
									use:motion
								>
									<GithubIcon class="h-4 w-4 mr-2 text-black dark:text-white" />
									GitHub
								</a>
							</Motion>

							<Motion
								let:motion
								variants={CHILD_VARIANTS}
								whileHover={{
									scale: 1.05,
									color: '#4b5563',
								}}
							>
								<a
									href={linkedInUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
									use:motion
								>
									<LinkedInIcon class="h-4 w-4 mr-2 text-blue-600/90" />
									LinkedIn
								</a>
							</Motion>
						</div>
					</Motion>
				</div>

				<Motion
					variants={CHILD_VARIANTS}
					whileHover={{
						scale: 1.05,
					}}
					whileTap={{
						scale: 0.95,
					}}
					let:motion
				>
					<div
						class="mt-6 flex justify-center md:mt-0"
						use:motion
					>
						<div class="relative">
							<div
								class="from--500 absolute -inset-1 rounded-full bg-gradient-to-r to-yellow-500 opacity-30 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
							></div>
							{#if profileImageFields && profileImageFields.file}
								<img
									height="192px"
									width="192px"
									src={profileImageFields.file.url}
									alt={profileImageFields.title}
									class="relative w-48 rounded-full ring-2 ring-yellow-500/50 md:w-60"
									style="objectFit: 'cover'"
								/>
							{/if}
						</div>
					</div>
				</Motion>
			</div>
		</Motion>

		<Motion
			initial="hidden"
			variants={{
				hidden: {
					opacity: 0,
					y: 20,
				},
				visible: (
					delay = 0,
				) => ({
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.6,
						delay: delay,
						ease: 'easeOut',
					},
				}),
			}}
			let:motion
		>
			<div
				class="rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-green-500/10 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10"
				use:motion
			>
				<div class="text-muted-foreground relative mb-4 py-2 pl-4">
					<span
						class="absolute top-0 left-0 h-full w-1 rounded-full bg-gradient-to-b from-yellow-500 to-green-500"
					></span>
					<HtmlElement content={intro} />
				</div>
			</div>
		</Motion>
	</div>
</section>
