<style lang="postcss">
	@reference "@/styles/global.css";

	:global(.icon) {
		@apply h-5 w-5;
	}
</style>
<script lang="ts">
import Moon from 'lucide-svelte/icons/moon';
import Sun from 'lucide-svelte/icons/sun';
import { DARK_THEME, LIGHT_THEME, THEME_STORAGE_KEY } from '@/constants';
import Button from '@/ui/Button.svelte';

const getTheme = () =>
	localStorage.getItem(THEME_STORAGE_KEY)
		? localStorage.getItem(THEME_STORAGE_KEY)
		: DARK_THEME;

let theme = $state(getTheme());

const toggleTheme = () => {
	const newTheme = getTheme() === DARK_THEME ? LIGHT_THEME : DARK_THEME;
	localStorage.setItem(THEME_STORAGE_KEY, newTheme);
	if (theme !== newTheme) {
		document.documentElement.classList.toggle(DARK_THEME);
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
	{#if theme === LIGHT_THEME}
		<Moon class="icon" />
	{:else}
		<Sun class="icon" />
	{/if}
</Button>
