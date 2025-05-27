<!--</Motion.div>-->

<script lang="ts">
	import MotionDiv from './motion/MotionDiv.svelte';

	const defaultAnimations = {
		hidden: { opacity: 0, y: 20 },
		visible: (delay = 0) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: delay,
				ease: 'easeOut',
			},
		}),
	};

	let { children, delay = 0, ...props } = $props();
</script>

<MotionDiv
	initial="hidden"
	whileInView="visible"
	viewport={{ once: true, margin: '-100px' }}
	variants={defaultAnimations}
	custom={delay}
	{...props}
>
	<!-- <MotionDiv
  initial="hidden"
  variants={defaultAnimations}
  custom={delay}
  {...props}
> -->
	<!-- <MotionDiv -->
	<!-- custom={delay}
  {...props}
> -->
	{@render children?.()}
</MotionDiv>
