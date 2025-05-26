<script lang="ts">
  import { awards } from '../data';
  import { Trophy } from 'lucide-svelte';
  import MotionWrapper from './MotionWrapper.svelte';
  import GlassCard from './ui/GlassCard.svelte';
  import MotionDiv from './motion/MotionDiv.svelte';
  import MotionSpan from './motion/MotionSpan.svelte';
</script>

<section id="awards" class="py-12 bg-gradient-to-b from-background to-muted/10">
  <div class="container max-w-4xl mx-auto px-6 md:px-4">
    <MotionWrapper>
      <h2 class="text-2xl font-bold mb-8 text-center md:text-left">🏆 Awards</h2>
    </MotionWrapper>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each awards as award, index (`${award.name}-${award.date}`)}
        <MotionWrapper delay={index * 0.1}>
          <GlassCard className="p-4 dark:border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 flex flex-col h-full">
            <div class="flex items-center mb-2">
              <MotionDiv
                whileHover={{ rotate: 20 }}
                transition={{ type: 'spring', stiffness: 500 }}
                class="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1.5 mr-2"
              >
                <Trophy class="h-4 w-4 text-white" />
              </MotionDiv>
              <h3 class="font-medium">{award.name}</h3>
            </div>
            <p class="text-xs text-muted-foreground mb-1 pl-8">🏢 {`${award.issuer} (${award.date})`}</p>
            <div class="space-y-2 mt-auto">
              <div class="text-center wr">
                {#if award.position}
                  <MotionSpan
                    class="inline-block mt-1.5 mb-1.5 mr-2 text-center text-sm px-2.5 py-1 bg-yellow-500/10 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {award.position}
                  </MotionSpan>
                {/if}
                {#if award.type}
                  <MotionSpan
                    class="inline-block mt-1.5 mb-1.5 text-center text-sm px-2.5 py-1 bg-yellow-500/10 rounded-full"
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
