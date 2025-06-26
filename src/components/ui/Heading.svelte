<style lang="postcss">
  @reference "@/styles/global.css";

  h2 {
    @apply mb-8 flex items-center text-center text-2xl font-bold md:inline-block md:text-left;
  }

  :global(.project-showcase-heading-icon) {
    @apply mr-2 inline-block;
  }
</style>

<script lang="ts">
	import {
		Motion,
	} from 'svelte-motion';

  const {
  	icon,
  	text,
  } = $props();
</script>

<h2>
	<Motion
    initial={{
    	rotate: 0,
    }}
		transition={{
			duration: 0.5,
			delay: 0.2,
		}}
    let:motion
	>
    <span class="project-showcase-heading-icon" use:motion>
		{icon}&nbsp;
    </span>
	</Motion>{text}
</h2>
