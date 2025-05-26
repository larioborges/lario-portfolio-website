<script lang="ts">
	import { personalInfo } from '../data';
	import { Mail, MapPin } from 'lucide-svelte';
	import GithubIcon from './icons/Github.svelte';
	import LinkedInIcon from './icons/LinkedIn.svelte';
	import MotionWrapper from './MotionWrapper.svelte';
	import MotionDiv from './motion/MotionDiv.svelte';
	import MotionH1 from './motion/MotionH1.svelte';
	import MotionSpan from './motion/MotionSpan.svelte';
	import MotionP from './motion/MotionP.svelte';
	import MotionA from './motion/MotionA.svelte';

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};
</script>

<section class="py-16 md:py-24 relative overflow-hidden">
	<div class="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
		<MotionDiv variants={containerVariants} initial="hidden" animate="visible" class="flex flex-col md:flex-row md:items-center justify-between mb-8">
			<div class="text-center md:text-left">
				<MotionH1 class="text-4xl font-bold mb-2" variants={childVariants}>
					{personalInfo.name} <span class="inline-block animate-pulse"></span>
					<MotionSpan class="inline-block" initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
						<img alt="nerd" src="/images/nerd.webp" width="45px" class="inline-block ml-3 align-middle" />
					</MotionSpan>
				</MotionH1>

				<MotionP class="text-xl text-muted-foreground mb-6" variants={childVariants}>Senior Full Stack Web Engineer</MotionP>

				<MotionDiv class="flex flex-col gap-2 items-center md:items-start" variants={containerVariants}>
					<MotionDiv class="flex items-center text-sm text-muted-foreground" variants={childVariants} whileHover={{ scale: 1.05, color: '#4b5563' }}>
						<MapPin class="h-4 w-4 mr-2 text-red-400" />
						{personalInfo.location}
					</MotionDiv>

					<MotionA
						href={`mailto:${personalInfo.email}`}
						class="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
						variants={childVariants}
						whileHover={{ scale: 1.05, color: '#4b5563' }}
					>
						<Mail class="h-4 w-4 mr-2 text-green-500" />
						{personalInfo.email}
					</MotionA>

					<MotionA
						href={personalInfo.github}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
						variants={childVariants}
						whileHover={{ scale: 1.05, color: '#4b5563' }}
					>
						<GithubIcon className="h-4 w-4 mr-2 text-black dark:text-white" />
						GitHub
					</MotionA>

					<MotionA
						href={personalInfo.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
						variants={childVariants}
						whileHover={{ scale: 1.05, color: '#4b5563' }}
					>
						<LinkedInIcon className="h-4 w-4 mr-2 text-blue-600/90" />
						LinkedIn
					</MotionA>
				</MotionDiv>
			</div>

			<!-- <MotionDiv
        class="mt-6 md:mt-0 flex justify-center"
        variants={childVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      > -->
			<MotionDiv variants={childVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} class="mt-6 md:mt-0 flex justify-center">
				<div class="relative">
					<div
						class="absolute -inset-1 bg-gradient-to-r from--500 to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
					></div>
					<img src="/images/profile.webp" alt="Profile" class="w-48 md:w-60 rounded-full relative ring-2 ring-yellow-500/50" style="objectFit: 'cover'" />
				</div>
			</MotionDiv>
			<!-- </MotionDiv> -->
		</MotionDiv>

		<MotionWrapper>
			<div
				class="bg-gradient-to-r from-yellow-500/10 to-green-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-yellow-500/20 dark:border-yellow-500/10 shadow-sm"
			>
				<p class="text-muted-foreground pl-4 py-2 mb-4 relative">
					<span class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-500 to-green-500 rounded-full"></span>
					{personalInfo.intro}
				</p>
			</div>
		</MotionWrapper>
	</div>
</section>
