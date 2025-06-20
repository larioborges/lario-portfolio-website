<style lang="postcss">
@reference "@/styles/global.css";
:gloabl(img) {
  @apply mr-2.5 inline-block align-middle;
}
:gloabl(img.light) {
  @apply dark:hidden;
}
:gloabl(img.dark) {
  @apply hidden dark:inline-block;
}
:global(.home-link) {
  @apply flex items-center text-lg font-medium;
}
</style>

<script lang=ts>
import southAfrica from '@/images/south-africa.webp';
import luigiCap from '@/images/luigi-cap.webp';
import {
	Motion,
} from 'svelte-motion';

const {
	name,
} = $props();
</script>

<Motion
	whileHover={{
		scale: 1.05,
	}}
	whileTap={{
		scale: 0.95,
	}}
	let:motion
>
	<a
		class="home-link"
		use:motion
		href="/"
	>
    <img
      width="50px"
      height="36px"
      alt="South Africa"
      src={southAfrica.src}
      class="light"
    />
    <img
      width="35px"
      height="35px"
      alt="Luigi Cap"
      src={luigiCap.src}
      class="dark"
    />
    {name}
  </a>
</Motion>
