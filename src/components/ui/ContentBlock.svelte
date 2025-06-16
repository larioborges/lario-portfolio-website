<style lang="postcss">
	@reference "@/styles/global.css";
	.content-block-wrapper {
		@apply bg-background/80 dark:bg-card/10 mt-3 rounded-lg border border-yellow-500/20 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10;
	}
</style>

<script lang="ts">
import Content from './Content.svelte';
import {
	Motion,
} from 'svelte-motion';

const {
	content,
	heading,
	HeadingIcon,
} = $props();
</script>

<!--
whileInView={{
	opacity: 1,
	y: 0,
}}
viewport={{
	once: true,
}}
-->
<Motion
	initial={{
		opacity: 0,
		y: 20,
	}}
	transition={{
		duration: 0.5,
		delay: 0.2,
	}}
	let:motion
>
	<div
		class="content-block-wrapper"
		use:motion
	>
		<Content
		 	{content}
			{heading}
			{HeadingIcon}
		/>
	</div>
</Motion>
