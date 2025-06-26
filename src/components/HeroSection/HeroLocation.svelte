<style lang="postcss">
  @reference "@/styles/global.css";

  .location-wrapper {
    @apply text-muted-foreground flex items-center text-sm;
  }

  :global(.hero-icon) {
		@apply mr-2 h-4 w-4;
	}
</style>

<script lang="ts">
import MapPoint from '@/icons/MapPoint.svelte';

const { locationFields } = $props();
</script>

<p
	class="location-wrapper"
>
	<MapPoint class="hero-icon" />

	{#if locationFields.googleMapsUrl != null}
		<a
			href={locationFields.googleMapsUrl}
			target="_blank"
		>
			{locationFields.name}
		</a>
	{:else}
		<span>{locationFields.name}</span>
	{/if}
</p>
