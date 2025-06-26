<style lang="postcss">
@reference "@/styles/global.css";
#experience {
  @apply from-muted/20 to-background bg-gradient-to-b py-12;
}

.home-page-wrapper {
	@apply container mx-auto max-w-4xl px-6 md:px-4;
}
</style>

<script lang="ts">
import HeroSection from '@/components/HeroSection/HeroSection.svelte';
import SkillCategorySection from '@/components/SkillCategorySection.svelte';

const {
	personalInfo,
	featuredSkills,
} = $props();
</script>

<section id="experience">
	<div class="home-page-wrapper">
		<HeroSection
			{...personalInfo}
		/>
		<SkillCategorySection {...featuredSkills} />
	</div>
</section>
