<style lang="postcss">
	@reference "@/styles/global.css";

	.category-heading {
		@apply mb-3 flex items-center text-center text-lg font-medium md:text-left;

		span {
			@apply mr-2;
		}
	}

	.skill-tag-wrapper {
		@apply flex flex-wrap justify-center gap-2 md:justify-start;
	}
</style>

<script lang="ts">
import MotionDiv from '@/motion/MotionDiv.svelte';
import GlassCard from '@/ui/GlassCard.svelte';
import SkillTag from '@/ui/SkillTag.svelte';

const skillCategoryVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const { name, icon, skills } = $props();
</script>

{#snippet categoryHeading(name: string, icon: string)}
	<h3 class="category-heading">
		{#if icon}
			<span>{icon}</span>
		{/if}
		{name}
	</h3>
{/snippet}

{#snippet skillTags(skills: string[])}
	<div class="skill-tag-wrapper">
		{#each skills as skill, index (`${skill}-${index}`)}
			<SkillTag {index}>
				{skill}
			</SkillTag>
		{/each}
	</div>
{/snippet}

<MotionDiv variants={skillCategoryVariants}>
	<GlassCard class="p-4">
		{@render categoryHeading(
			name,
			icon,
		)}
		{@render skillTags(
			skills,
		)}
	</GlassCard>
</MotionDiv>
