<style lang="postcss">
@reference "@/styles/global.css";
#skills {
	@aply from-background to-muted/20 bg-gradient-to-b py-12;

	.skills-content-wrappper {
		@apply container mx-auto max-w-4xl px-6 md:px-4;
	}
}
.heading-wrapper {
	@apply mb-3 flex items-center;
}
</style>

<script lang="ts">
import SkillCategorySection from '@/components/SkillCategorySection.svelte';
import MotionDiv from '@/motion/MotionDiv.svelte';
import Heading from '@/ui/Heading.svelte';

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

<section
	id="skills"
>
	<div class="skills-content-wrappper">
		<div class="heading-wrapper">
			<Heading icon="🛠️" text="Skills" />
		</div>

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
				<SkillCategorySection {name} {icon} {skills} />,
			{/each}
		</MotionDiv>
	</div>
</section>
