<style lang="postcss">
@reference "@/styles/global.css";
.issuer {
	@apply text-muted-foreground mb-1 pl-8 text-xs;
	a {
		@apply underline;
	}
}
</style>

<script lang="ts">
  const {
  	award,
  } = $props()
</script>

{#if award.issuerWebsiteUrl != null}
	<p class="issuer">
		🏢 <a
			href={award.issuerWebsiteUrl}
			target="_blank">{award.issuerName}</a>
	&nbsp;-&nbsp;{award.date}
	</p>
{:else}
	<p class="issuer">
		🏢 {`${award.issuerName} - ${award.date}`}
	</p>
{/if}
