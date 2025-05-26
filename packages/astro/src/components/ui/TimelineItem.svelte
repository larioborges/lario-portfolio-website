<script lang="ts">
  import { cn } from '../../utils';
  import MotionDiv from '../motion/MotionDiv.svelte';

  let {
    title,
    titleHref = null,
    subtitle,
    subtitleHref = null,
    location,
    locationHref = null,
    date,
    isLast = false,
    index = 0,
    children,
  } = $props();
</script>

<MotionDiv
  class="relative flex gap-6"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  viewport={{ once: true, margin: '-50px' }}
>
  <div class="flex flex-col items-center">
    <MotionDiv
      class="flex h-[18px] w-[18px] rounded-full border border-yellow-500/50 bg-background dark:bg-muted z-10"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15,
        delay: index * 0.2 + 0.2,
      }}
      viewport={{ once: true, margin: '-50px' }}
    ></MotionDiv>
    {#if !isLast}
      <MotionDiv
        class="w-px grow bg-gradient-to-b from-yellow-500/50 to-green-500/30 dark:from-yellow-500/30 dark:to-yellow-100/10"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        viewport={{ once: true, margin: '-50px' }}
      ></MotionDiv>
    {/if}
  </div>
  <div class={cn('pb-8', isLast ? 'pb-0' : '')}>
    <MotionDiv
      class="flex flex-col gap-0.5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <h3 class="font-extrabold mb-2 text-xl">{`📅 ${date}`}</h3>
      <div class="pl-3 mb-6">
        {#if titleHref}
          <a href={titleHref} target="_blank" rel="noreferrer">
            <h3 class="font-medium">{title}</h3>
          </a>
        {:else}
          <h3 class="font-medium">{title}</h3>
        {/if}
        {#if subtitleHref}
          <a href={subtitleHref} target="_blank" rel="noreferrer">
            <p class="text-sm text-muted-foreground">{subtitle}</p>
          </a>
        {:else}
          <p class="text-sm text-muted-foreground">{subtitle}</p>
        {/if}
        {#if locationHref}
          <a href={locationHref} target="_blank" rel="noreferrer">
            <p class="text-sm text-muted-foreground">📍 {location}</p>
          </a>
        {:else}
          <p class="text-sm text-muted-foreground">📍 {location}</p>
        {/if}
        <div>
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {@render children?.()}
        </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  </div>
</MotionDiv>
