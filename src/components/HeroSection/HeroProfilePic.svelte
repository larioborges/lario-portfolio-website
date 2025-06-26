<style lang="postcss">
@reference "@/styles/global.css";

.wrapper {
  @apply mt-6 flex justify-center md:mt-0;

  >  div {
    @apply relative;
  }
}

img {
  @apply relative w-48 rounded-full ring-2 ring-yellow-500/50 md:w-60;
  "object-fit": cover;
}

.img-decoration {
  @apply absolute -inset-1 rounded-full bg-gradient-to-r to-yellow-500 opacity-30 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200;
}
</style>

<script lang="ts">
import { Motion } from 'svelte-motion';
import { CHILD_VARIANTS } from '@/constants';

const { profileImageFields } = $props();
</script>

<Motion
	variants={CHILD_VARIANTS}
	whileHover={{
		scale: 1.05,
	}}
	whileTap={{
		scale: 0.95,
	}}
	let:motion
>
	<div
		class="wrapper"
		use:motion
	>
		<div>
			<div
				class="img-decoration"
			></div>
			{#if profileImageFields && profileImageFields.file}
				<img
					height="192px"
					width="192px"
					src={profileImageFields.file.url}
					alt={profileImageFields.title}
				/>
			{/if}
		</div>
	</div>
</Motion>
