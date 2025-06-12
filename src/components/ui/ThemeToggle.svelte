<script lang="ts">
import {
	Moon, Sun,
} from 'lucide-svelte';
import Button from '@/ui/Button.svelte';

const getTheme = () => {
	if (localStorage.getItem(
		'theme',
	)) {
		return localStorage.getItem(
			'theme',
		);
	}
	return 'dark';
};

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
		<Moon class="h-5 w-5" />
	{:else}
		<Sun class="h-5 w-5" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
