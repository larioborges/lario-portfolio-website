<style lang="postcss">
@reference "@/styles/global.css";

.award-name {
	@apply mb-2 flex items-center;

	h3 {
		@apply font-medium;
	}
}

:global(.award-name-icon-wrapper) {
  @apply mr-2 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 p-1.5;
}

:global(.trophy-icon) {
	@apply h-4 w-4;
}
</style>

<script lang="ts">
import {
	Motion,
} from 'svelte-motion';
import Trophy from '../icons/Trophy.svelte';

const {
	award,
} = $props();
</script>

<div class="award-name">
	<Motion
		whileHover={{
			rotate: 20,
		}}
		transition={{
			type: 'spring',
			stiffness: 500,
		}}
    let:motion
	>
		<div class="award-name-icon-wrapper" use:motion>
			<Trophy class="trophy-icon" />
		</div>
	</Motion>
	<h3>{award?.name}</h3>
</div>
