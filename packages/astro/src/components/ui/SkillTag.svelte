<script lang="ts">
  import MotionDiv from '../motion/MotionDiv.svelte';

  let { children, index } = $props();
</script>

<MotionDiv
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transitionOverride={{
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 0.05 * index,
  }}
  whileHover={{ scale: 1.05, y: -2 }}
  class="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-yellow-500/10 shadow-sm"
>
<!-- <MotionDiv
  class="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-yellow-500/10 shadow-sm"
> -->
  {@render children?.()}
</MotionDiv>
<!-- </MotionDiv> -->
