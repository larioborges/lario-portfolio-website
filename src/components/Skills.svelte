<script lang="ts">
import SkillCategorySection from '@/components/SkillCategorySection.svelte';
import MotionDiv from '@/motion/MotionDiv.svelte';
import Heading from '@/ui/Heading.svelte';
import PageSection from '@/ui/PageSection.svelte';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const { skillCategories } = $props();
</script>

<PageSection>
	{#snippet heading()}
		<Heading icon="🛠️" text="Skills" />
	{/snippet}

	{#snippet content()}
		<MotionDiv
			class="space-y-6"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{
				once: true,
				margin: '-50px',
			}}
		>
			{#each skillCategories as {
				name, icon, skills,
			}, index (`${name}-${index}`)}
				<SkillCategorySection {name} {icon} {skills} />
			{/each}
		</MotionDiv>
	{/snippet}
</PageSection>
