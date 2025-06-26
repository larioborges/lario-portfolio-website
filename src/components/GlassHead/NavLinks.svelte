<style lang="postcss">
  @reference "@/styles/global.css";
  .nav-links {
    @apply text-sm font-medium;
  }
  .nav-links.desktop {
    @apply hidden items-center space-x-6 md:flex;
  }
  .nav-links.mobile {
    @apply flex flex-col space-y-4;
  }

  .nav-link {
    @apply hover:text-foreground/80 text-foreground/60 transition-colors;
  }
  .nav-link.mobile {
    @apply py-2;
  }
</style>

<script lang="ts">
import { Motion } from 'svelte-motion';
import { NAV_LINKS } from '@/constants';

const { isMobile = false } = $props();

const motionProps = (index: number) =>
	isMobile
		? {
				initial: {
					opacity: 0,
					x: -20,
				},
				animate: {
					opacity: 1,
					x: 0,
				},
				transition: {
					duration: 0.2,
					delay: index * 0.1,
				},
			}
		: {
				initial: {
					opacity: 0,
					y: -10,
				},
				animate: {
					opacity: 1,
					y: 0,
				},
				transition: {
					duration: 0.2,
					delay: index * 0.1,
				},
				whileHover: {
					y: -2,
				},
			};
</script>

<nav class={`nav-links ${isMobile ? 'mobile': 'desktop'}`}>
	{#each NAV_LINKS as {
		icon, name, href,
	}, index (name)}
		<span>
			{#if icon}
        {icon}
      {/if}
      <Motion
        {...motionProps(
        	index,
        )}
				let:motion
			>
				<a
					{href}
					class={`nav-link${isMobile ? 'mobile' : ''}`}
					use:motion
				>
					{name}
				</a>
			</Motion>
		</span>
	{/each}
</nav>
