<style lang="postcss">
@reference "@/styles/global.css";

.heading {
	@apply bg-background/70 dark:bg-background/40 border-border/40 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-md backdrop-filter;

	> div {
		@apply container mx-auto flex max-w-4xl items-center justify-between p-4;
	}
}
</style>

<script lang="ts">
import ActionButtons from './ActionButtons.svelte';
import HomeLink from './HomeLink.svelte';
import MobileMenu from './MobileMenu.svelte';
import NavLinks from './NavLinks.svelte';

let isMenuOpen = $state(false);

const toggleMenu = () => {
	isMenuOpen = !isMenuOpen;
};

const { name } = $props();
</script>

<header
	class="heading"
>
	<div>
		<HomeLink {name} />

		<NavLinks isMobile={false} />

		<ActionButtons {isMenuOpen} {toggleMenu} />
	</div>

	<MobileMenu {isMenuOpen} />
</header>
