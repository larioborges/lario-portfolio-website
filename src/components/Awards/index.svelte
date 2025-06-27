<script lang="ts">
import MotionWrapper from '@/motion/MotionWrapper.svelte';
import GlassCard from '@/ui/GlassCard.svelte';
import Heading from '@/ui/Heading.svelte';
import PageSection from '@/ui/PageSection.svelte';
import AwardName from './AwardName.svelte';
import Issuer from './Issuer.svelte';
import Tags from './Tags.svelte';

const { awards } = $props();
</script>

<PageSection>
	{#snippet heading()}
		<Heading icon="🏆" text="Awards" />
	{/snippet}

	{#snippet content()}
		<div class="award-content">
			{#each awards as
				award,  index (`${award?.name}-${award?.date}`)}
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
	{/snippet}
</PageSection>

<style lang="postcss">
@reference '@/styles/global.css';
:global(.award-content) {
	@apply grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3;
}
</style>
