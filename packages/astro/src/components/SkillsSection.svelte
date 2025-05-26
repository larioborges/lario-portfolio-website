<script lang="ts">
	import { skills } from '../data';
	import MotionWrapper from './MotionWrapper.svelte';
	import GlassCard from './ui/GlassCard.svelte';
	import SkillTag from './ui/SkillTag.svelte';
	import MotionDiv from './motion/MotionDiv.svelte';

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const skillCategoryVariants = {
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

{#snippet categoryHeading(name, icon)}
	<h3 class="text-lg font-medium mb-3 text-center md:text-left flex items-center">
		{#if icon}
			<span class="mr-2 text-xl">{icon}</span>
		{/if}
		{name}
	</h3>
{/snippet}

{#snippet skillTags(skills)}
	<div class="flex flex-wrap gap-2 justify-center md:justify-start">
		{#each skills as skill, index (`${skill}-${index}`)}
			<SkillTag {index}>
				{skill}
			</SkillTag>
		{/each}
	</div>
{/snippet}

{#snippet categorySection(category: string, icon: string, skills: string[])}
	<MotionDiv variants={skillCategoryVariants}>
		<!-- <MotionDiv> -->
		<GlassCard className="p-4">
			{@render categoryHeading(category, icon)}
			{@render skillTags(skills)}
		</GlassCard>
	</MotionDiv>
{/snippet}

<section id="skills" class="py-12 bg-gradient-to-b from-background to-muted/20">
	<div class="container max-w-4xl mx-auto px-6 md:px-4">
		<MotionWrapper>
			<h2 class="text-2xl font-bold mb-8 text-center md:text-left">🛠️ Skills</h2>
		</MotionWrapper>

		<!-- this is a comment! 
    <Motion.div
      class="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    > -->
		<MotionDiv
			class="space-y-6"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-50px' }}
		>
			<!-- <MotionDiv
      class="space-y-6"
    > -->
			{@render categorySection('Programming Languages', '💻', skills.programmingLanguages)}
			{@render categorySection('Frontend Development', '🎨', skills.frontendDevelopment)}
			{@render categorySection('Backend Development', '⚙️', skills.backendDevelopment)}
			{@render categorySection('Database & Storage', '🗄️', skills.databaseAndStorage)}
			{@render categorySection('Content Management Systems', '📝', skills.cms)}
			{@render categorySection('Cloud & DevOps', '☁️', skills.cloudAndDevOps)}
			{@render categorySection('Tools & Services', '🧰', skills.toolsAndServices)}
		</MotionDiv>
	</div>
</section>
