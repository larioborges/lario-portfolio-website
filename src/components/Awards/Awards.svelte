<style lang="postcss">
	@reference "@/styles/global.css";
  #awards {
	  @apply from-background to-muted/10 bg-gradient-to-b py-12;

		> div {
			@apply container mx-auto max-w-4xl px-6 md:px-4;
		}

		.award-heading {
			@apply mb-8 text-center text-2xl font-bold md:text-left;
		}

		.award-content {
			@apply grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3;
		}
	}
	.heading-wrapper {
		@apply mb-3 flex items-center;
	}
</style>

<script lang="ts">
import Heading from '@/ui/Heading.svelte';
import MotionWrapper from '@/motion/MotionWrapper.svelte';
import GlassCard from '@/ui/GlassCard.svelte';
import AwardName from './AwardName.svelte';
import Issuer from './Issuer.svelte';
import Tags from './Tags.svelte';

const {
	awards,
} = $props();
</script>

<section
	id="awards"
>
	<div>
		<div class="heading-wrapper">
			<Heading icon="🏆" text="Awards" />
		</div>
		<div class="award-content">
			{#each awards as {
				award,  index,
			} (`${award.name}-${award.date}`)}
				<MotionWrapper delay={index * 0.1}>
					<GlassCard
						class="p-4 dark:border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 flex flex-col h-full"
					>
						<AwardName {award} />
						<Issuer {award} />
						<Tags {award}/>

					</GlassCard>
				</MotionWrapper>
			{/each}
		</div>
	</div>
</section>
