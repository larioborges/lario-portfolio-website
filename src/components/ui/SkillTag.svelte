<script lang="ts">
import { Motion } from 'svelte-motion';

const { children, index = 1 } = $props();
</script>

<!-- <MotionDiv
	whileInView={{
		opacity: 1,
		scale: 1,
	}}
-->
<Motion
	initial={{
		opacity: 0,
		scale: 0.8,
	}}

	transition={{
		type: 'spring',
		stiffness: 260,
		damping: 20,
		delay: 0.05 * index,
	}}
	let:motion
>
	<div
		class="bg-yellow-500/10 rounded-md border border-yellow-500/10 px-3 py-1 text-sm shadow-sm backdrop-blur-sm"
		use:motion
	>
		{@render children?.()}
	</div>
</Motion>
