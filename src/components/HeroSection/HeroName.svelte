<script lang="ts">
import { Motion } from 'svelte-motion';
import { CHILD_VARIANTS } from '@/constants';

const { name, img, jobTitle = 'Senior Full Stack Web Engineer' } = $props();
</script>

<Motion
	variants={CHILD_VARIANTS}
	let:motion
>
	<h1
		use:motion
	>
		{name} <span></span>
		{#if img}
			<Motion
				initial={{
					rotate: 0,
				}}
				whileHover={{
					rotate: 360,
				}}
				transition={{
					duration: 0.3,
				}}
				let:motion
			>
				<ehanced:img
					src={img}
					class="heading-image"
					use:motion
				/>
			</Motion>
		{/if}
	</h1>
</Motion>

<Motion
	variants={CHILD_VARIANTS}
	let:motion
>
	<p
		class="job-title"
		use:motion
	>
		{jobTitle}
	</p>
</Motion>

<style lang="postcss">
  @reference "@/styles/global.css";

  .job-title {
    @apply text-muted-foreground mb-6 text-xl;
  }
	
  h1 {
    @apply mb-2 text-4xl font-bold;

    span {
      @apply inline-block animate-pulse;
    }
  }

	:global(.heading-image) {
		width: 45px;
		height: 45px;
		@apply ml-3 inline-block align-middle;
	}
</style>
