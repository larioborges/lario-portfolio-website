<script lang="ts">
  import { projectShowcase } from '../../data';
  import TimelineItem from '../ui/TimelineItem.svelte';
  import { Briefcase, Star } from 'lucide-svelte';
  import MotionWrapper from '../MotionWrapper.svelte';
  import SkillTag from '../ui/SkillTag.svelte';
  import MotionDiv from '../motion/MotionDiv.svelte';
  import MotionSpan from '../motion/MotionSpan.svelte';
  import MotionLi from '../motion/MotionLi.svelte';
</script>

<section id="projects" class="py-12 bg-gradient-to-b from-muted/20 to-background">
  <div class="container max-w-4xl mx-auto px-6 md:px-4">
    <MotionWrapper>
      <h2 class="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
        <MotionSpan
          class="inline-block mr-2"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          💼
        </MotionSpan>{' '}
        Project Showcase
      </h2>
    </MotionWrapper>
    <div class="mb-8">
      {#each projectShowcase as project, index (`${project.title}-${project.period}`)}
        <TimelineItem
          title={`👨‍💻 ${project.title}`}
          subtitle={`🌍 ${project.employer}`}
          location={project.location}
          date={project.period}
          isLast={index === projectShowcase.length - 1}
          index={index}
        >
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
            {#each project.tags as tag, index (`${tag}-${project.title}`)}
              <SkillTag index={index}>
                {tag}
              </SkillTag>
            {/each}
          </div>
          <MotionDiv
            class="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-yellow-500/20 dark:bg-card/10 dark:border-yellow-500/10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div class="flex items-center mb-3">
              <div class="h-6 w-6 flex items-center justify-center rounded-full bg-yellow-500/10 mr-2">
                <Briefcase class="h-4 w-4 text-yellow-500" />
              </div>
              <h4 class="text-sm font-medium">Job Role</h4>
            </div>
            <div class="list-none ml-4 space-y-2 text-sm">
              {#each project.description as role, i (`${role}-${i}`)}
                <MotionLi
                  class="text-muted-foreground relative pl-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  {role}
                </MotionLi>
              {/each}
            </div>
          </MotionDiv>
          <MotionDiv
            class="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-yellow-500/20 dark:bg-card/10 dark:border-yellow-500/10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div class="flex items-center mb-3">
              <div class="h-6 w-6 flex items-center justify-center rounded-full bg-yellow-500/10 mr-2">
                <Star class="h-4 w-4 text-yellow-500" />
              </div>
              <h4 class="text-sm font-medium">Highlights</h4>
            </div>
            <ul class="list-circle ml-4 space-y-2 text-sm">
              {#each project.highlights as highlight, i (`${highlight}-${project.period}`)}
                <MotionLi
                  class="text-muted-foreground relative pl-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  {highlight}
                </MotionLi>
              {/each}
            </ul>
          </MotionDiv>
        </TimelineItem>
      {/each}
    </div>
  </div>
</section>
