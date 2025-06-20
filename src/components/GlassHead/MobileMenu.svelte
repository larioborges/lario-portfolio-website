<style lang="postcss">
@reference "@/styles/global.css";
:global(.nav-links-wrapper-mobile) {
	@apply border-border/10 bg-background/80 dark:bg-background/40 border-t px-4 py-4 backdrop-blur-md backdrop-filter md:hidden;
}
</style>

<script lang="ts">
import {
	AnimatePresence, Motion,
} from 'svelte-motion';
import NavLinks from './NavLinks.svelte';

const {
	isMenuOpen,
} = $props();
</script>
<AnimatePresence>
	{#if isMenuOpen}
		<Motion
			initial={{
				opacity: 0,
				height: 0,
			}}
			animate={{
				opacity: 1,
				height: 'auto',
			}}
			exit={{
				opacity: 0,
				height: 0,
			}}
			transition={{
				duration: 0.3,
			}}
			let:motion
		>
			<div
				class="nav-links-wrapper-mobile"
				use:motion
			>
				<NavLinks isMobile={true} />
			</div>
		</Motion>
	{/if}
</AnimatePresence>
