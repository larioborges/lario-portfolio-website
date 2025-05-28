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

{#snippet categoryHeading(name: string, icon: string)}
	<h3 class="mb-3 flex items-center text-center text-lg font-medium md:text-left">
		{#if icon}
			<span class="mr-2 text-xl">{icon}</span>
		{/if}
		{name}
	</h3>
{/snippet}

{#snippet skillTags(skills: string[])}
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		{#each skills as skill, index (`${skill}-${index}`)}
			<SkillTag {index}>
				{skill}
			</SkillTag>
		{/each}
	</div>
{/snippet}

{#snippet categorySection(category: string, icon: string, skills: string[])}
	<MotionDiv variants={skillCategoryVariants}>
		<GlassCard className="p-4">
			{@render categoryHeading(category, icon)}
			{@render skillTags(skills)}
		</GlassCard>
	</MotionDiv>
{/snippet}

<section
	id="skills"
	class="from-background to-muted/20 bg-gradient-to-b py-12"
>
	<div class="container mx-auto max-w-4xl px-6 md:px-4">
		<MotionWrapper>
			<h2 class="mb-8 text-center text-2xl font-bold md:text-left">🛠️ Skills</h2>
		</MotionWrapper>

		<MotionDiv
			class="space-y-6"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-50px' }}
		>
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
