<style lang="postcss">
@reference "@/styles/global.css";
.wrapper {
  @apply flex items-center space-x-2;
}
:global(.menu-button) {
  @apply text-foreground p-2 md:hidden;
}
</style>

<script lang="ts">
import ThemeToggle from '@/ui/ThemeToggle.svelte';
import Menu from 'lucide-svelte/icons/menu';
import X from 'lucide-svelte/icons/x';
import {
	Motion,
} from 'svelte-motion';

const {
	toggleMenu, isMenuOpen,
} = $props();
</script>

<div class="wrapper">
	<ThemeToggle />

	<Motion
		whileTap={{
			scale: 0.95,
		}}
		let:motion
	>
		<button
			class="menu-button"
			onclick={toggleMenu}
			aria-label="Toggle menu"
			use:motion
		>
			{#if isMenuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</Motion>
</div>
