<script lang="ts">
import { Motion } from 'svelte-motion';

const compProps = $props();
</script>

<Motion
	{...compProps}
	let:motion
	let:props
>
	<button
		{...props}
		use:motion
	>
		{@render compProps?.children?.()}
	</button>
</Motion>
