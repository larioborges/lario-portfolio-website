<style lang="postcss">
  @reference "@/styles/global.css";

  .job-title {
    @apply text-muted-foreground mb-6 text-xl;
  }

  img {
    @apply ml-3 inline-block align-middle;
  }

  h1 {
    @apply mb-2 text-4xl font-bold;

    span {
      @apply inline-block animate-pulse;
    }
  }
</style>

<script lang="ts">
import {
	CHILD_VARIANTS,
} from '@/constants';
import {
	Motion,
} from 'svelte-motion';
import nerd from '@/images/nerd.webp';

const {
	name,
	img = nerd,
	jobTitle = 'Senior Full Stack Web Engineer',
} = $props();
</script>

<Motion
	variants={CHILD_VARIANTS}
	let:motion
>
	<h1
		use:motion
	>
		{name} <span></span>
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
			<img
				alt={img.alt}
				src={img.src}
				width="45px"
				height="45px"
				use:motion
			/>
		</Motion>
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
