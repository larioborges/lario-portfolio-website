<script lang="ts">
import { Motion } from 'svelte-motion';

const compProps = $props();
</script>

<Motion
	let:motion
	{...compProps}
	let:props
>
	<span
		{...props}
		use:motion
	>
		{@render compProps.children?.()}
	</span>
</Motion>
