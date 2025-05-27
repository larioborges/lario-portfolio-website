<script lang="ts">
	import { Motion } from 'svelte-motion';
	let compProps = $props();
</script>

<Motion
	{...compProps}
	let:motion
	let:props
>
	<li
		{...props}
		use:motion
	>
		{@render compProps?.children?.()}
	</li>
</Motion>
