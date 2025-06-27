<script>
import { Motion } from 'svelte-motion';
import HtmlElement from '../ui/HtmlElement.svelte';

const { intro } = $props();
</script>

<Motion
	initial="hidden"
	variants={{
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: (
			delay = 0,
		) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: delay,
				ease: 'easeOut',
			},
		}),
	}}
	let:motion
>
	<div
		class="wrapper"
		use:motion
	>
		<div>
			<span></span>
			<HtmlElement content={intro} />
		</div>
	</div>
</Motion>

<style lang="postcss">
  @reference "@/styles/global.css";

  .wrapper {
    @apply rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-green-500/10 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10;

    > div {
      @apply text-muted-foreground relative mb-4 py-2 pl-4;

      > span {
        @apply absolute top-0 left-0 h-full w-1 rounded-full bg-gradient-to-b from-yellow-500 to-green-500;
      }
    }
  }
</style>
