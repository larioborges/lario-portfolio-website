<script lang="ts">
  import { education } from '../data';
  import TimelineItem from './ui/TimelineItem.svelte';
  import { Award } from 'lucide-svelte';
  import MotionWrapper from './MotionWrapper.svelte';
  import MotionDiv from './motion/MotionDiv.svelte';
  import MotionLi from './motion/MotionLi.svelte';
</script>

<section id="education" class="py-12 bg-gradient-to-b from-muted/10 to-background">
  <div class="container max-w-4xl mx-auto px-6 md:px-4">
    <MotionWrapper>
      <h2 class="text-2xl font-bold mb-8 text-center md:text-left">🎓 Education</h2>
    </MotionWrapper>

    <div class="mb-8">
      {#each education as edu, index (`${edu.institution}${edu.period}`)}
        <TimelineItem
          title={`🎓 ${edu.degree}`}
          subtitle={`🏛️ ${edu.institution}`}
          subtitleHref={edu.institutionHref}
          location={edu.location}
          locationHref={edu.locationHref}
          date={edu.period}
          isLast={index === education.length - 1}
          index={index}
        >
          {#if edu.achievements && edu.achievements.length > 0}
            <MotionDiv
              class="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-yellow-500/20 dark:bg-card/10 dark:border-yellow-500/10 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div class="flex items-center mb-3">
                <div class="h-6 w-6 flex items-center justify-center rounded-full bg-yellow-500/10 mr-2">
                  <Award class="h-4 w-4 text-yellow-500" />
                </div>
                <h4 class="text-sm font-medium">Achievements & Activities</h4>
              </div>
              <ul class="list-disc ml-4 space-y-2 text-sm">
                {#each edu.achievements as achievement, i (`${achievement}-${i}`)}
                  <MotionLi
                    class="text-muted-foreground relative pl-0 ml-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    viewport={{ once: true }}
                  >
                    {achievement}
                  </MotionLi>
                {/each}
              </ul>
            </MotionDiv>
          {/if}
        </TimelineItem>
      {/each}
    </div>
  </div>
</section>
