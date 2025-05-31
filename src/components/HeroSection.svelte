<script lang="ts">
import {
	Mail, MapPin,
} from 'lucide-svelte';
import GithubIcon from '@/icons/Github.svelte';
import LinkedInIcon from '@/icons/LinkedIn.svelte';
import MotionWrapper from '@/motion/MotionWrapper.svelte';
import MotionDiv from '@/motion/MotionDiv.svelte';
import MotionH1 from '@/motion/MotionH1.svelte';
import MotionSpan from '@/motion/MotionSpan.svelte';
import MotionP from '@/motion/MotionP.svelte';
import MotionA from '@/motion/MotionA.svelte';
import nerd from '@/images/nerd.webp';
import type {
	AssetFields,
} from 'contentful';
import HtmlElement from '@/ui/HtmlElement.svelte';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
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

<section class="relative overflow-hidden py-16 md:py-24">
	<div class="relative z-10 container mx-auto max-w-4xl px-6 md:px-4">
		<MotionDiv
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			class="mb-8 flex flex-col justify-between md:flex-row md:items-center"
		>
			<div class="text-center md:text-left">
				<MotionH1
					class="mb-2 text-4xl font-bold"
					variants={childVariants}
				>
					{name} <span class="inline-block animate-pulse"></span>
					<MotionSpan
						class="inline-block"
						initial={{
							rotate: 0,
						}}
						whileHover={{
							rotate: 360,
						}}
						transition={{
							duration: 0.5,
						}}
					>
						<img
							alt="nerd"
							src={nerd.src}
							width="45px"
							class="ml-3 inline-block align-middle"
						/>
					</MotionSpan>
				</MotionH1>

				<MotionP
					class="text-muted-foreground mb-6 text-xl"
					variants={childVariants}>Senior Full Stack Web Engineer</MotionP
				>

				<MotionDiv
					class="flex flex-col items-center gap-2 md:items-start"
					variants={containerVariants}
				>
					<MotionDiv
						class="text-muted-foreground flex items-center text-sm"
						variants={childVariants}
						whileHover={{
							scale: 1.05,
							color: '#4b5563',
						}}
					>
						<MapPin class="mr-2 h-4 w-4 text-red-400" />
						{#if locationFields.googleMapsUrl}
							<a
								href={locationFields.googleMapsUrl}
								target="_blank"
							>
								{locationFields.name}
							</a>
						{:else}
							{locationFields.name}
						{/if}
					</MotionDiv>

					<MotionA
						href={`mailto:${email}`}
						class="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
						variants={childVariants}
						whileHover={{
							scale: 1.05,
							color: '#4b5563',
						}}
					>
						<Mail class="mr-2 h-4 w-4 text-green-500" />
						{email}
					</MotionA>

					<MotionA
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
						variants={childVariants}
						whileHover={{
							scale: 1.05,
							color: '#4b5563',
						}}
					>
						<GithubIcon className="h-4 w-4 mr-2 text-black dark:text-white" />
						GitHub
					</MotionA>

					<MotionA
						href={linkedInUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
						variants={childVariants}
						whileHover={{
							scale: 1.05,
							color: '#4b5563',
						}}
					>
						<LinkedInIcon className="h-4 w-4 mr-2 text-blue-600/90" />
						LinkedIn
					</MotionA>
				</MotionDiv>
			</div>

			<MotionDiv
				variants={childVariants}
				whileHover={{
					scale: 1.05,
				}}
				whileTap={{
					scale: 0.95,
				}}
				class="mt-6 flex justify-center md:mt-0"
			>
				<div class="relative">
					<div
						class="from--500 absolute -inset-1 rounded-full bg-gradient-to-r to-yellow-500 opacity-30 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
					></div>
					{#if profileImageFields && profileImageFields.file}
						<img
							src={profileImageFields.file.url}
							alt={profileImageFields.title}
							class="relative w-48 rounded-full ring-2 ring-yellow-500/50 md:w-60"
							style="objectFit: 'cover'"
						/>
					{/if}
				</div>
			</MotionDiv>
		</MotionDiv>

		<MotionWrapper>
			<div
				class="rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-green-500/10 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10"
			>
				<div class="text-muted-foreground relative mb-4 py-2 pl-4">
					<span
						class="absolute top-0 left-0 h-full w-1 rounded-full bg-gradient-to-b from-yellow-500 to-green-500"
					></span>
					<HtmlElement content={intro} />
				</div>
			</div>
		</MotionWrapper>
	</div>
</section>
