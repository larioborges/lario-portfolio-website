<style lang="postcss">
	@reference "@/styles/global.css";

	.hero-link {
		@apply text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors;
	}
</style>

<script>
import { Motion } from 'svelte-motion';
import { CHILD_VARIANTS } from '@/constants';

const { href, children } = $props();
</script>

<Motion
		let:motion
		variants={CHILD_VARIANTS}
		whileHover={{
			scale: 1.05,
			color: '#4b5563',
		}}
	>
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		class="hero-link"
		use:motion
	>
		{@render children?.()}
	</a>
</Motion>
