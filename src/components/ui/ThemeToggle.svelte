<style lang="postcss">
	@reference "@/styles/global.css";

	:global(.icon) {
		@apply h-5 w-5;
	}

	.toggle-theme {
		@apply sr-only;
	}
</style>

<script lang="ts">
import Sun from 'lucide-svelte/icons/sun';
import Moon from 'lucide-svelte/icons/moon';
import Button from '@/ui/Button.svelte';

const getTheme = () =>
	localStorage.getItem(
		'theme',
	) ?
		localStorage.getItem(
			'theme',
		) :
		'dark';

let theme = $state(
	getTheme(),
);

const toggleTheme = () => {
	const newTheme = getTheme() == 'dark' ? 'light' : 'dark';
	localStorage.setItem(
		'theme',
		newTheme,
	);
	if (theme != newTheme) {
		document.documentElement.classList.toggle(
			'dark',
		);
	}
	theme = newTheme;
};
</script>

<Button
	variant="ghost"
	size="icon"
	onclick={toggleTheme}
	class="rounded-full cursor-pointer"
>
	{#if theme === 'light'}
		<Moon class="icon" />
	{:else}
		<Sun class="icon" />
	{/if}
	<span class="toggle-theme">Toggle theme</span>
</Button>
