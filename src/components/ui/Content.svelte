<style lang="postcss">
	@reference "@/styles/global.css";
	.content-wrapper {
		@apply ml-4 list-none space-y-2 text-sm;
	}
  .heading-wrapper {
		@apply mb-3 flex items-center;
	}
	.icon-wrapper {
		@apply mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10;
	}
	.heading {
		@apply text-sm font-medium;
	}
</style>

<script lang="ts">
import HtmlElement from '@/ui/HtmlElement.svelte';

const { content, heading, HeadingIcon } = $props();
</script>

{#if heading}
<div class="heading-wrapper">
  {#if HeadingIcon}
	<div
		class="icon-wrapper"
	>
		<HeadingIcon class="icon" />
	</div>
  {/if}
	<h4 class="heading">{heading}</h4>
</div>
{/if}
{#if content}
<div class="content-wrapper">
	<HtmlElement {content} />
</div>
{/if}
