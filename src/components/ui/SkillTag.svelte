<script lang="ts">
	import MotionDiv from '@/motion/MotionDiv.svelte';
	let { children, index = 1 } = $props();
</script>

<!-- <MotionDiv
	initial={{ opacity: 0, scale: 0.8 }}
	whileInView={{ opacity: 1, scale: 1 }}
	transitionOverride={{
		type: 'spring',
		stiffness: 260,
		damping: 20,
		delay: 0.05 * index,
	}}
	whileHover={{ scale: 1.05, y: -2 }}
	class="bg-muted/80 rounded-md border border-yellow-500/10 px-3 py-1 text-sm shadow-sm backdrop-blur-sm"
> -->
<MotionDiv
	initial={{ opacity: 0, scale: 0.8 }}
	whileInView={{ opacity: 1, scale: 1 }}
	transitionOverride={{
		type: 'spring',
		stiffness: 260,
		damping: 20,
		delay: 0.05 * index,
	}}
	class="bg-yellow-500/10 rounded-md border border-yellow-500/10 px-3 py-1 text-sm shadow-sm backdrop-blur-sm"
>
	{@render children?.()}
</MotionDiv>
