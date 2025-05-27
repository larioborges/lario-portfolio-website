<script lang="ts">
	import { awards } from '../data';
	import { Trophy } from 'lucide-svelte';
	import MotionWrapper from './MotionWrapper.svelte';
	import GlassCard from './ui/GlassCard.svelte';
	import MotionDiv from './motion/MotionDiv.svelte';
	import MotionSpan from './motion/MotionSpan.svelte';
</script>

<section
	id="awards"
	class="from-background to-muted/10 bg-gradient-to-b py-12"
>
	<div class="container mx-auto max-w-4xl px-6 md:px-4">
		<MotionWrapper>
			<h2 class="mb-8 text-center text-2xl font-bold md:text-left">🏆 Awards</h2>
		</MotionWrapper>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each awards as award, index (`${award.name}-${award.date}`)}
				<MotionWrapper delay={index * 0.1}>
					<GlassCard
						className="p-4 dark:border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 flex flex-col h-full"
					>
						<div class="mb-2 flex items-center">
							<MotionDiv
								whileHover={{ rotate: 20 }}
								transition={{ type: 'spring', stiffness: 500 }}
								class="mr-2 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 p-1.5"
							>
								<Trophy class="h-4 w-4 text-white" />
							</MotionDiv>
							<h3 class="font-medium">{award.name}</h3>
						</div>
						<p class="text-muted-foreground mb-1 pl-8 text-xs">🏢 {`${award.issuer} (${award.date})`}</p>
						<div class="mt-auto space-y-2">
							<div class="wr text-center">
								{#if award.position}
									<MotionSpan
										class="mt-1.5 mr-2 mb-1.5 inline-block rounded-full bg-yellow-500/10 px-2.5 py-1 text-center text-sm"
										whileHover={{ scale: 1.05 }}
									>
										{award.position}
									</MotionSpan>
								{/if}
								{#if award.type}
									<MotionSpan
										class="mt-1.5 mb-1.5 inline-block rounded-full bg-yellow-500/10 px-2.5 py-1 text-center text-sm"
										whileHover={{ scale: 1.05 }}
									>
										{award.type}
									</MotionSpan>
								{/if}
							</div>
						</div>
					</GlassCard>
				</MotionWrapper>
			{/each}
		</div>
	</div>
</section>
