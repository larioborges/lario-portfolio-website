<script lang="ts">
	import { Motion } from 'svelte-motion';
	let compProps = $props();
</script>

<Motion
	{...compProps}
	let:motion
	let:props
>
	<h1
		{...props}
		use:motion
	>
		{@render compProps?.children?.()}
	</h1>
</Motion>
