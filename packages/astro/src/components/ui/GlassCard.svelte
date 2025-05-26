<!-- <MotionDiv
  class={cn(
    'rounded-lg border border-border/50 bg-background/80 backdrop-blur-md backdrop-filter shadow-sm dark:bg-card/30 dark:backdrop-blur-md',
    hoverEffect && 'hover:shadow-md transition-all duration-300 ease-in-out',
    className,
  )}
  {...props}
/> -->

<script lang="ts">
	import { cn } from '../../utils';
	import MotionDiv from '../motion/MotionDiv.svelte';

	let { children, className, hoverEffect = true, ...props } = $props();
</script>

<MotionDiv
	class={cn(
		'rounded-lg border border-border/50 bg-background/80 backdrop-blur-md backdrop-filter shadow-sm dark:bg-card/30 dark:backdrop-blur-md',
		hoverEffect && 'hover:shadow-md transition-all duration-300 ease-in-out',
		className,
	)}
	whileHover={hoverEffect
		? {
				y: -5,
				transition: { duration: 0.2 },
			}
		: undefined}
	{...props}
>
	{@render children?.()}
</MotionDiv>
